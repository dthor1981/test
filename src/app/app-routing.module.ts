import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
/*import { SpecialtiesComponent } from './widgets/specialties/specialties.component';
import { CustomersComponent } from './widgets/customers/customers.component';*/
import { MainCustomersComponent } from './main-customers/main-customers.component';
import { MainSpecialtiesComponent } from './main-specialties/main-specialties.component';
import { MainTechnologiesComponent } from './main-technologies/main-technologies.component';

const routes: Routes = [
  {path: '',      redirectTo: '/widgets', pathMatch: 'full' },
  {path: 'widgets', component: WidgetsComponent},
  {path: 'tech', component: MainTechnologiesComponent},
  {path: 'spec', component: MainSpecialtiesComponent},
  {path: 'cust', component: MainCustomersComponent},
  {path: '**',     redirectTo: '/widgets', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomRouterModule {}
