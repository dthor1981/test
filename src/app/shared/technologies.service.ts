import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Technologies } from '../shared/technologies.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3004/technologies/';
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TechnologiesService {
  constructor(private http: Http) {}
  loadTechnologies() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(technologies => technologies.map(technology => Object.assign({}, technology, {img: `${IMG_URL}${technology.img}`})));
    }
}
