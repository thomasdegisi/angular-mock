import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends DataService<Customer> {
  constructor(private _http: HttpClient) {
    super();
    this.name = 'customer';
    this.url = 'api/' + this.name;
    this.http = _http;
  }
}
