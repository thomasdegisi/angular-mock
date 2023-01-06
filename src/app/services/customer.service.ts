import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends DbService<Customer> {
  constructor(private _http: HttpClient) {
    super();
    this.name = 'customer';
    this.url = 'api/customers';
    this.http = _http;
  }
}
