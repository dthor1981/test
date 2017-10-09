import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../shared/customers.service';
import { Customers } from '../shared/customers.model';


@Component({
  selector: 'app-main-customers',
  templateUrl: './main-customers.component.html',
  styleUrls: ['./main-customers.component.css']
})
export class MainCustomersComponent implements OnInit {

  customers: Array<Customers>;

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.loadCustomers()
    .subscribe(customers => {
      this.customers = customers;
      console.log(customers);
    });
  }

}
