// import { Component, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-client-ip',
  templateUrl: './client-ip.component.html',
  styleUrls: ['./client-ip.component.scss']
})
export class ClientIpComponent {
  @Input() countIP: any[];
}
