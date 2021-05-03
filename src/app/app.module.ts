import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericButtonComponent } from './generic-components/generic-button/generic-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericTableComponent } from './generic-components/generic-table/generic-table.component';
import {CustomDatePipe} from './pipes/custom.datepipe';

@NgModule({
  declarations: [
    AppComponent,
    GenericButtonComponent,
    GenericTableComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CustomDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
