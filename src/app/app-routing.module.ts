import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import {LoginComponent} from './components/login/login.component';
import {CategoryTableComponent} from './components/category/category-table/category-table.component';
import {VehicleTableComponent} from './components/vehicle/vehicle-table/vehicle-table.component';
import {GenericFormComponent} from './generic-components/generic-form/generic-form.component';
import {UserFormComponent} from './components/user/user-form/user-form.component';
import {CategoryFormComponent} from './components/category/category-form/category-form.component';
import {VehicleFormComponent} from './components/vehicle/vehicle-form/vehicle-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', children: [
      {path: 'user', children: [
          {path: '', component: AdminHomepageComponent},
          {path: 'new', component: UserFormComponent},
          {path: 'edit/:id', component: UserFormComponent}
      ]},
      {path: 'category', children: [
          {path: '', component: CategoryTableComponent},
          {path: 'new', component: CategoryFormComponent},
          {path: 'edit/:id', component: CategoryFormComponent}
      ]},
      {path: 'vehicle', children: [
          {path: '', component: VehicleTableComponent},
          {path: 'new', component: VehicleFormComponent},
          {path: 'edit/:id', component: VehicleFormComponent}
      ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
