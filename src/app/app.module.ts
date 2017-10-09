import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
/*import { Routes, RouterModule } from '@angular/router';*/
import { CustomRouterModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './header/menu/menu.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { TechnologiesComponent } from './widgets/technologies/technologies.component';
import { SpecialtiesComponent } from './widgets/specialties/specialties.component';
import { CustomersComponent } from './widgets/customers/customers.component';
import { MainCustomersComponent } from './main-customers/main-customers.component';
import { MainSpecialtiesComponent } from './main-specialties/main-specialties.component';
import { MainTechnologiesComponent } from './main-technologies/main-technologies.component';

/*import { WindowRefService } from './shared/window-ref.service';*/
import { WidgetsService } from './shared/widgets.service';
import { TechnologiesService } from './shared/technologies.service';
import { CustomersService } from './shared/customers.service';
import { SpecialtiesService } from './shared/specialties.service';


/*import {BrowserAnimationsModule} from '@angular/platform-browser/animations';*/
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    WidgetsComponent,
    TechnologiesComponent,
    SpecialtiesComponent,
    CustomersComponent,
    MainCustomersComponent,
    MainSpecialtiesComponent,
    MainTechnologiesComponent,
  ],
  imports: [
    CdkTableModule,
    BrowserModule,
    HttpModule,
    CustomRouterModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdStepperModule
  ],
  providers: [
    WidgetsService,
    CustomersService,
    TechnologiesService,
    SpecialtiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
