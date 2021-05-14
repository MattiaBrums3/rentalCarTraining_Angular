import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericButtonComponent } from './components/generic-components/generic-button/generic-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericTableComponent } from './components/generic-components/generic-table/generic-table.component';
import { CustomDatePipe } from './pipes/custom.datepipe';
import { TableFilterPipe } from './pipes/table.filterpipe';
import { PaginationPipe } from './pipes/table.paginationpipe';
import { NavbarComponent } from './components/generic-components/navbar/navbar.component';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { GenericFormComponent } from './components/generic-components/generic-form/generic-form.component';
import { CategoryTableComponent } from './components/category/category-table/category-table.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { VehicleTableComponent } from './components/vehicle/vehicle-table/vehicle-table.component';
import { VehicleFormComponent } from './components/vehicle/vehicle-form/vehicle-form.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

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
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
    NgbModule
  ],
  providers: [CustomDatePipe, PaginationPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
