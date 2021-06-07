import { Component, OnInit } from '@angular/core';
import {USERTABLE} from '../../../configs/my-configs';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {Location} from '@angular/common';
import {RentalService} from '../../../services/rental.service';

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
              private rentalService: RentalService,
              private location: Location) {}

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe(
        u => this.users = u
      );
  }

  doOperation(event: any) {
    const action = event.action;

    if (action === 'Elimina') {
      this.rentalService.getRentalsByUser(event.record.id)
        .subscribe(r => {
          if (r === null) {
            this.service.deleteUser(event.record.id)
              .subscribe(
                () => {
                  alert('Utente eliminato con successo.');
                  this.goBack();
                });
          } else {
            alert('Impossibile eliminare. Utente associato ad una o più prenotazioni.');
            this.goBack();
          }
        });
    }
  }

  goBack() {
    this.location.back();
  }
}
