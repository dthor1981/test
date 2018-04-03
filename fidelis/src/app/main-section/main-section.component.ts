import { Component, OnInit } from '@angular/core';
import { MainSectionTableComponent } from './main-section-table/main-section-table.component';
import { AlertsService } from '../shared/alerts.service';
import { AlertsInterface } from '../shared/alerts.model';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  alerts: Array<AlertsInterface>;

  constructor(private alertsService: AlertsService) {}
  ngOnInit() {
    this.alertsService.loadAlerts()
    .subscribe(alerts => {
      console.log(alerts);
      this.alerts = alerts;
      // console.log(this.alerts[0]);
    });
  }

}
