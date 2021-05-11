import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericButtonComponent } from './generic-components/generic-button/generic-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericTableComponent } from './generic-components/generic-table/generic-table.component';
import {CustomDatePipe} from './pipes/custom.datepipe';
import {TableFilterPipe} from './pipes/table.filterpipe';
import {PaginationPipe} from './pipes/table.paginationpipe';
import { NavbarComponent } from './generic-components/navbar/navbar.component';
import { AdminHomepageComponent } from './components/admin-homepage/admin-homepage.component';
import { LoginComponent } from './components/login/login.component';
import { GenericFormComponent } from './generic-components/generic-form/generic-form.component';
import { CategoryTableComponent } from './components/category/category-table/category-table.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { VehicleTableComponent } from './components/vehicle/vehicle-table/vehicle-table.component';
import { VehicleFormComponent } from './components/vehicle/vehicle-form/vehicle-form.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';

@NgModule({
    declarations: [
        AppComponent,
        GenericButtonComponent,
        GenericTableComponent,
        CustomDatePipe,
        TableFilterPipe,
        PaginationPipe,
        NavbarComponent,
        AdminHomepageComponent,
        LoginComponent,
        CategoryTableComponent,
        CategoryFormComponent,
        VehicleTableComponent,
        GenericFormComponent,
        VehicleTableComponent,
        VehicleFormComponent,
        UserTableComponent,
        UserFormComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CustomDatePipe, PaginationPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
