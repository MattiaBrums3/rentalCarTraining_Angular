import {Component, OnInit} from '@angular/core';
import { MyButtonConfig } from './classes/my-button-config';
import { AppService } from './app-service.service';
import { User } from './models/user';
import { Category } from './models/category';
import { CATEGORYTABLE, USERTABLE } from './classes/my-headers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Rental Car';

  tableConfigUser = USERTABLE;
  tableConfigCategory = CATEGORYTABLE;

  users: User[];
  categories: Category[];

  constructor(private service: AppService) {
    this.users = this.service.getUsers();
    this.categories = this.service.getCategories();
  }

  ngOnInit() {

  }

  functionCall(event: string) {
    console.log('functionCall:', event);
  }
}
