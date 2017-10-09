import { Component, OnInit } from '@angular/core';
import { SpecialtiesService } from '../shared/specialties.service';
import { Specialties } from '../shared/specialties.model';

@Component({
  selector: 'app-main-specialties',
  templateUrl: './main-specialties.component.html',
  styleUrls: ['./main-specialties.component.css']
})
export class MainSpecialtiesComponent implements OnInit {

  specialties: Array<Specialties>;

  constructor(private specialtiesService: SpecialtiesService) { }

  ngOnInit() {
    this.specialtiesService.loadSpecialties()
    .subscribe(specialties => {
      this.specialties = specialties;
      console.log(specialties);
    });
  }

}
