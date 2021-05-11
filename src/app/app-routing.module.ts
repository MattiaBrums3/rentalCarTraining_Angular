import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import {CategoryComponent} from './components/category/category.component';
import {LoginComponent} from './components/login/login.component';
import {VehicleComponent} from './components/vehicle/vehicle.component';
import {GenericFormComponent} from './generic-components/generic-form/generic-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', children: [
      {path: 'user', children: [
          {path: '', component: AdminHomepageComponent},
          {path: ':action', component: GenericFormComponent},
          {path: ':action/:id', component: GenericFormComponent}
      ]},
      {path: 'category', children: [
          {path: '', component: CategoryComponent},
          {path: ':action', component: GenericFormComponent},
          {path: ':action/:id', component: GenericFormComponent}
      ]},
      {path: 'vehicle', children: [
          {path: '', component: VehicleComponent},
          {path: ':action', component: GenericFormComponent},
          {path: ':action/:id', component: GenericFormComponent}
      ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
