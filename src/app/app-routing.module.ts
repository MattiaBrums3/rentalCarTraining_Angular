import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import {LoginComponent} from './pages/login/login.component';
import {CategoryTableComponent} from './components/category/category-table/category-table.component';
import {VehicleTableComponent} from './components/vehicle/vehicle-table/vehicle-table.component';
import {UserFormComponent} from './components/user/user-form/user-form.component';
import {CategoryFormComponent} from './components/category/category-form/category-form.component';
import {VehicleFormComponent} from './components/vehicle/vehicle-form/vehicle-form.component';
import {RentalTableComponent} from './components/rental/rental-table/rental-table.component';
import {AdminGuard} from './auth/admin.guard';
import {CustomerHomepageComponent} from './pages/customer-homepage/customer-homepage.component';
import {AccessDeniedComponent} from './pages/access-denied/access-denied.component';
import {CustomerGuard} from './auth/customer.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'access-denied', component: AccessDeniedComponent},
  {path: 'admin', children: [
      {path: 'user', canActivate: [AdminGuard], children: [
          {path: '', component: AdminHomepageComponent, canActivate: [AdminGuard]},
          {path: 'new', component: UserFormComponent, canActivate: [AdminGuard]},
          {path: 'edit/:id', component: UserFormComponent, canActivate: [AdminGuard]},
          {path: 'delete/:id', component: AdminHomepageComponent, canActivate: [AdminGuard]},
          {path: 'car_rental/:id', component: RentalTableComponent, canActivate: [AdminGuard]}
      ]},
      {path: 'category', children: [
          {path: '', component: CategoryTableComponent, canActivate: [AdminGuard]},
          {path: 'new', component: CategoryFormComponent, canActivate: [AdminGuard]},
          {path: 'edit/:id', component: CategoryFormComponent, canActivate: [AdminGuard]},
          {path: 'delete/:id', component: CategoryTableComponent, canActivate: [AdminGuard]}
      ]},
      {path: 'vehicle', children: [
          {path: '', component: VehicleTableComponent, canActivate: [AdminGuard]},
          {path: 'new', component: VehicleFormComponent, canActivate: [AdminGuard]},
          {path: 'edit/:id', component: VehicleFormComponent, canActivate: [AdminGuard]},
          {path: 'delete/:id', component: VehicleTableComponent, canActivate: [AdminGuard]}
      ]}
  ]},
  {path: 'user', component: CustomerHomepageComponent, canActivate: [CustomerGuard]},
  {path: 'editUser/:id', component: UserFormComponent, canActivate: [CustomerGuard]},
  {path: 'vehicle', component: VehicleTableComponent, canActivate: [CustomerGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
