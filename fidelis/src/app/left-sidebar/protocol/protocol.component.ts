// import { Component, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent {
  @Input() countProtocol: any[];
}
