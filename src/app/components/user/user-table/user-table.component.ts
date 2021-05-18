import { Component, OnInit } from '@angular/core';
import {USERTABLE} from '../../../configs/my-configs';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  title = 'Lista Utenti';

  tableConfigUser = USERTABLE;

  users: User[];

  constructor(private service: UserService,
              private location: Location) {
    this.service.getUsers()
      .subscribe(
        u => this.users = u
    );
  }

  ngOnInit(): void {
  }

  doOperation(event: any) {
    const action = event.action;

    if (action === 'Elimina') {
      this.service.deleteUser(event.record.id).subscribe(
        () => {
          alert('Utente eliminato con successo.');
          this.goBack();
        }
      );
    }
  }

  goBack() {
    this.location.back();
  }
}
