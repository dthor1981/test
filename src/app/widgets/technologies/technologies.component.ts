import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technologies } from '../../shared/technologies.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  @Input() technologies: Technologies[];
}
