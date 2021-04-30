import { User } from '../models/user';
import { DatePipe } from '@angular/common';

export const USERS: User[] = [
  { idUser: 1, name: 'Mattia', surname: 'Brumana', dateOfBirth: new DatePipe('1996/04/03'),
    fiscalCode: 'BRMMTT96D03A456E', superUser: true, username: 'm.brumana',
    password: 'admin'
  },
  { idUser: 2, name: 'Mario', surname: 'Verdi', dateOfBirth: new DatePipe('1992/09/23'),
    fiscalCode: 'VRDMRO92I23A678H', superUser: false, username: 'm.verdi',
    password: 'fbrss'
  },
  { idUser: 3, name: 'Alfonso', surname: 'Bianchi', dateOfBirth: new DatePipe('1995/10/13'),
    fiscalCode: 'BNCLFN95L13A135R', superUser: false, username: 'a.bianchi',
    password: 'alfonso'
  }
];
