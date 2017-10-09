import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Specialties } from '../../shared/specialties.model';


@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css']
})
export class SpecialtiesComponent {
  @Input() specialties: Specialties[];
}



