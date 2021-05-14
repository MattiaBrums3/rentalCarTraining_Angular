import { Component, OnInit } from '@angular/core';
import {USERTABLE} from '../../../configs/my-configs';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  title = 'Lista Utenti';

  tableConfigUser = USERTABLE;

  users: User[];

  constructor(private service: UserService) {
    this.service.getUsers()
      .subscribe(
        u => this.users = u
    );
  }

  ngOnInit(): void {
  }

  clickedRow(event: any) {
    console.log(event);
  }

}
