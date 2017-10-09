import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Specialties } from '../shared/specialties.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3004/specialties/';
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class SpecialtiesService {
  constructor(private http: Http) {}
  loadSpecialties() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(specialties => specialties.map(specialty => Object.assign({}, specialty, {img: `${IMG_URL}${specialty.img}`})));
    }
}
