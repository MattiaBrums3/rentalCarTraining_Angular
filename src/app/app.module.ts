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
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

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
        CategoryComponent,
        LoginComponent,
        VehicleComponent
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
