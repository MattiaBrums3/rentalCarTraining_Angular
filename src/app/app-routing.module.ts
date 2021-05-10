import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import {CategoryComponent} from './components/category/category.component';
import {LoginComponent} from './components/login/login.component';
import {VehicleComponent} from './components/vehicle/vehicle.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'admin', children: [
      {path: '', component: AdminHomepageComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'vehicle', component: VehicleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
