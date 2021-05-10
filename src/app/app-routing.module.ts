import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import {CategoryComponent} from './components/category/category.component';
import {LoginComponent} from './components/login/login.component';
import {VehicleComponent} from './components/vehicle/vehicle.component';
import {GenericFormComponent} from './generic-components/generic-form/generic-form.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'admin', children: [
      {path: 'user', children: [
          {path: '', component: AdminHomepageComponent},
          {path: 'new', component: GenericFormComponent},
          {path: 'edit/:id', component: GenericFormComponent}
      ]},
      {path: 'category', children: [
          {path: '', component: CategoryComponent},
          {path: 'new', component: GenericFormComponent},
          {path: 'edit/:id', component: GenericFormComponent}
      ]},
      {path: 'vehicle', children: [
          {path: '', component: VehicleComponent},
          {path: 'new', component: GenericFormComponent},
          {path: 'edit/:id', component: GenericFormComponent}
      ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
