import { Component, OnInit } from '@angular/core';
import { SeverityComponent } from './severity/severity.component';
import { AlertsService } from '../shared/alerts.service';
import { AlertsInterface } from '../shared/alerts.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
   alerts: Array<AlertsInterface>;
   countList: Array<number>;
   countProtocol: Array<number>;
   countIP: Array<number>;

  constructor(private alertsService: AlertsService) { }

  ngOnInit() {
    this.alertsService.loadAlerts()
    .subscribe(alerts => {
      // this.alerts = Array.of(alerts[0]);
      this.alerts = alerts;
      console.log(this.alerts);
      this.countList = this.getSeverityCount(alerts);
      // console.log(this.countList);
      this.countProtocol = this.getProtocolCount(alerts);
      this.countIP = this.getIPCount(alerts);
    });
  }

 getSeverityCount(severityList) {
  const severityArr = [];
  let countArrHigh = 0;
  let countArrMed = 0;
  let countArrLow = 0;

    for (let i = 0; i < severityList.length; i++) {
        if (severityList[i].Severity === 'High') {
          countArrHigh += 1;
        } else if (severityList[i].Severity === 'Medium') {
          countArrMed += 1;
        } else {
          countArrLow += 1;
        }
    }
    severityArr.push(countArrHigh, countArrMed, countArrLow);
    return severityArr;
  }

  getProtocolCount(protocolList) {
    const protocolArr = [];
    let countArrHTTP = 0;
    let countArrFTP = 0;
    let countArrTLS = 0;

      for (let i = 0; i < protocolList.length; i++) {
          if (protocolList[i].Protocol === 'HTTP') {
            countArrHTTP += 1;
          } else if (protocolList[i].Protocol === 'FTP') {
            countArrFTP += 1;
          } else if (protocolList[i].Protocol === 'TLS'){
            countArrTLS += 1;
          }
      }
      protocolArr.push(countArrHTTP , countArrFTP , countArrTLS);
      return protocolArr;
    }

    getIPCount(IPList) {
      const IPArr = [];
      let countArrIP1 = 0;
      let countArrIP2 = 0;
      let countArrIP3 = 0;

        for (let i = 0; i < IPList.length; i++) {
            if (IPList[i].ClientIP === '43.172.24.178') {
              countArrIP1 += 1;
            } else if (IPList[i].ClientIP === '66.78.200.140') {
              countArrIP2 += 1;
            } else if (IPList[i].ClientIP === '155.179.121.134'){
              countArrIP3 += 1;
            }
        }
        IPArr.push(countArrIP1, countArrIP2, countArrIP3);
        return IPArr;
      }

}
