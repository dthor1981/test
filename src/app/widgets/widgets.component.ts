import { Component, OnInit } from '@angular/core';
/*import { WidgetsService, Widget } from '../shared';*/
import { WidgetsService } from '../shared/widgets.service';
import { Widgets } from '../shared/widgets.model';
import { CustomersService } from '../shared/customers.service';
import { Customers } from '../shared/customers.model';
import { SpecialtiesService } from '../shared/specialties.service';
import { Specialties } from '../shared/specialties.model';
import { TechnologiesService } from '../shared/technologies.service';
import { Technologies } from '../shared/technologies.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Array<Widgets>;
  technologies: Array<Technologies>;
  specialties: Array<Specialties>;
  customers: Array<Customers>;

  constructor(
    private widgetsService: WidgetsService,
    private customersService: CustomersService,
    private technologiesService: TechnologiesService,
    private specialtiesService: SpecialtiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.widgetsService.loadWidgets()
      .subscribe(widgets => {
        this.widgets = widgets;
        console.log(widgets);
      });
      this.customersService.loadCustomers()
      .subscribe(customers => {
        this.customers = customers;
        console.log(customers);
      });
      this.technologiesService.loadTechnologies()
      .subscribe(technologies => {
        this.technologies = technologies;
        console.log(technologies);
      });
      this.specialtiesService.loadSpecialties()
      .subscribe(specialties => {
        this.specialties = specialties;
        console.log(specialties);
      });
  }
}
