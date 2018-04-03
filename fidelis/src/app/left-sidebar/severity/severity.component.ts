import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { AlertsInterface } from '../../shared/alerts.model';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.scss']
})
export class SeverityComponent {
   @Input() countList: any[];
}
