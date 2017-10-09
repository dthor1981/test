import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customers } from '../../shared/customers.model';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  @Input() customers: Customers[];
}


