import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AlertsService } from './shared/alerts.service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/Material';
import { SeverityComponent } from './left-sidebar/severity/severity.component';
import { ProtocolComponent } from './left-sidebar/protocol/protocol.component';
import { ClientIpComponent } from './left-sidebar/client-ip/client-ip.component';
import { MainSectionTopComponent } from './main-section/main-section-top/main-section-top.component';
import { MainSectionTableComponent } from './main-section/main-section-table/main-section-table.component';
import { AlertDetailsComponent } from './right-sidebar/alert-details/alert-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    MainSectionComponent,
    RightSidebarComponent,
    SeverityComponent,
    ProtocolComponent,
    ClientIpComponent,
    MainSectionTopComponent,
    MainSectionTableComponent,
    AlertDetailsComponent
  ],
  imports: [
    CdkTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
