import { Component, OnInit } from '@angular/core';
import {USERTABLE} from '../../../classes/my-configs';
import {User} from '../../../models/user';
import {AppService} from '../../../app-service.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  title = 'Lista Utenti';

  tableConfigUser = USERTABLE;

  users: User[];

  constructor(private service: AppService) {
    this.users = this.service.getUsers();
  }

  ngOnInit(): void {
  }

}
