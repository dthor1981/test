import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Customers } from '../shared/customers.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3004/customers/';
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CustomersService {
  constructor(private http: Http) {}
  loadCustomers() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(customers => customers.map(customer => Object.assign({}, customer, {img: `${IMG_URL}${customer.img}`})));
    }
}
