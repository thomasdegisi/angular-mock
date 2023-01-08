import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, Observable, tap } from 'rxjs';

import { CustomersDataSource } from '../customers/customers-datasource';
import { CustomerService } from '../services/customer.service';
import { Customer, NEW } from '../models/customer';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements AfterViewInit {
  @ViewChild(StatusComponent) status!: StatusComponent;
  dataSource!: CustomersDataSource;
  item: Customer = NEW;
  form: FormGroup = this.fb.group({
    id: [null],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: [null],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.minLength(5), Validators.maxLength(5)])
    ],
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomerService) {}

  getMessageTail(): string {
    return ' ' + this.item.firstName + ' ' + this.item.lastName + ', ' + this.item.id + '.';
  }

  get(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id != 0) {
      this.service.getById(id).subscribe(_item => {
        this.hasUnitNumber = _item.address2 != null && _item.address2.length > 0;
        this.item = _item;
        this.form = this.fb.group({
          id: [_item.id],
          firstName: [_item.firstName, Validators.required],
          lastName: [_item.lastName, Validators.required],
          address: [_item.address, Validators.required],
          address2: [_item.address2],
          city: [_item.city, Validators.required],
          state: [_item.state, Validators.required],
          postalCode: [_item.postalCode, Validators.compose([
            Validators.required, Validators.minLength(5), Validators.maxLength(5)])
          ],
        });
        this.status.statusMessage = 'Got' + this.getMessageTail();
      });
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/customers');
  }

  ngAfterViewInit(): void {
    this.get();
  }

  onSubmit(): void {
    this.item = this.form.getRawValue();

    let messageHead: string;
    let observable: Observable<Customer>;

    if (this.item.id == null) {
      observable = this.service.add(this.item);
      messageHead = 'Added';
    } else {
      observable = this.service.update(this.item);
      messageHead = 'Updated';
    }

    observable.pipe(
      tap((_item) => {
        this.dataSource = new CustomersDataSource(this.service, this.status);

        if (this.item.id == null) {
          this.item = _item;
          this.dataSource.add(_item);
        } else {
          this.dataSource.update(_item);
        }
        this.status.statusMessage = messageHead + this.getMessageTail();
      }),
      delay(1500),
    ).subscribe(() => this.goBack());
  }
}
