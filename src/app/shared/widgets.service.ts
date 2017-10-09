import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Widgets } from '../shared/widgets.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://localhost:3004/widgets/';
const IMG_URL = 'assets/img/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {
  constructor(private http: Http) {}
  loadWidgets() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(widgets => widgets.map(widget => Object.assign({}, widget, {img: `${IMG_URL}${widget.img}`})));
    }
}
