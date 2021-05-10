import { Component, OnInit } from '@angular/core';
import {CATEGORYTABLE, USERTABLE} from '../../classes/my-configs';
import {User} from '../../models/user';
import {Category} from '../../models/category';
import {AppService} from '../../app-service.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  title = 'Admin Homepage';

  tableConfigUser = USERTABLE;

  users: User[];

  constructor(private service: AppService) {
    this.users = this.service.getUsers();
  }

  ngOnInit(): void {
  }
}
