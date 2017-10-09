import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../shared/technologies.service';
import { Technologies } from '../shared/technologies.model';

@Component({
  selector: 'app-main-technologies',
  templateUrl: './main-technologies.component.html',
  styleUrls: ['./main-technologies.component.css']
})
export class MainTechnologiesComponent implements OnInit {
  technologies: Array<Technologies>;

  constructor(private technologiesService: TechnologiesService ) { }

  ngOnInit() {
    this.technologiesService.loadTechnologies()
    .subscribe(technologies => {
      this.technologies = technologies;
      console.log(technologies);
    });
  }

}
