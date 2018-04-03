import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
// import { AlertsInterface } from '../shared/alerts.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3000/alerts/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable()
export class AlertsService {

  constructor(private http: Http) {}
    loadAlerts() {
      return this.http.get(BASE_URL)
        .map(res => res.json())
        .map(alerts => alerts.map(alert => Object.assign({}, alert)));
      }
  }


