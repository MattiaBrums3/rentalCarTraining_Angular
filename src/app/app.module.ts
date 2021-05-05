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

@NgModule({
    declarations: [
        AppComponent,
        GenericButtonComponent,
        GenericTableComponent,
        CustomDatePipe,
        TableFilterPipe,
        PaginationPipe
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
