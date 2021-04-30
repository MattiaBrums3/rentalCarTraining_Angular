import { Component } from '@angular/core';
import { MyButtonConfig } from './classes/my-button-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Rental Car';
  saveButton: MyButtonConfig = {customCssClass: 'btn btn-primary', text: 'Salva', icon: 'save'};
  editButton: MyButtonConfig = {customCssClass: 'btn btn-success', text: 'Modifica', icon: 'edit'};
  deleteButton: MyButtonConfig = {customCssClass: 'btn btn-danger', text: 'Elimina', icon: 'delete'};

  functionCall(event: string) {
    console.log('functionCall:', event);
  }
}
