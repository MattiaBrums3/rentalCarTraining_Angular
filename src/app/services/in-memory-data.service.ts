import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as _ from 'lodash';
import {HttpResponse} from '@angular/common/http';
import {of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const users = [
      {
        id: 1, name: 'Mattia', surname: 'Brumana', dateOfBirth: new Date('1996-04-03T11:44:00.524Z'),
        fiscalCode: 'BRMMTT96D03A456E', superUser: true, username: 'm.brumana',
        password: 'admin'
      },
      {
        id: 2, name: 'Mario', surname: 'Verdi', dateOfBirth: new Date('1992/09/23'),
        fiscalCode: 'VRDMRO92I23A678H', superUser: false, username: 'm.verdi',
        password: 'fbrss'
      },
      {
        id: 3, name: 'Alfonso', surname: 'Bianchi', dateOfBirth: new Date('1995/10/13'),
        fiscalCode: 'BNCLFN95L13A135R', superUser: false, username: 'a.bianchi',
        password: 'alfonso'
      },
      {
        id: 4, name: 'Giovanni', surname: 'Rossi', dateOfBirth: new Date('1990/05/13'),
        fiscalCode: 'RSSGVN90E13F765D', superUser: false, username: 'g.rossi',
        password: 'giovanni'
      },
      {
        id: 5, name: 'Luca', surname: 'Brambilla', dateOfBirth: new Date('1989/04/22'),
        fiscalCode: 'BRMLCA89D22A456P', superUser: false, username: 'l.brambilla',
        password: 'luca89'
      },
      {
        id: 6, name: 'Gianpietro', surname: 'Galli', dateOfBirth: new Date('1984/05/25'),
        fiscalCode: 'GLLGNP84E25G135P', superUser: false, username: 'g.galli',
        password: 'galli'
      }
    ];

    const categories = [
      { id: 1, typology: 'Automobile' },
      { id: 2, typology: 'Motocicletta' },
      { id: 3, typology: 'Pullman'}
    ];

    const vehicles = [
      {id: 1, model: '488 Pista', manufacturer: 'Ferrari', licensePlate: 'FZ235FG',
        yearOfRegistration: 2019, idCategory: 1},
      {id: 2, model: 'Panda', manufacturer: 'Fiat', licensePlate: 'GX234RF',
        yearOfRegistration: 2016, idCategory: 1},
      {id: 3, model: '999', manufacturer: 'Ducati', licensePlate: 'GG56789',
        yearOfRegistration: 2015, idCategory: 2},
      {id: 4, model: '911 Turbo', manufacturer: 'Porsche', licensePlate: 'FB473WE',
        yearOfRegistration: 2017, idCategory: 1},
    ];

    const rentals = [
      {id: 1, idUser: 2, idVehicle: 1, dateStart: '2021-04-01T11:44:00.524Z',
        dateEnd: '2021-05-31T11:44:00.524Z', approved: true},
      {id: 2, idUser: 3, idVehicle: 2, dateStart: '2021-05-20T11:44:00.524Z',
        dateEnd: '2021-05-25T11:44:00.524Z', approved: false},
      {id: 3, idUser: 2, idVehicle: 4, dateStart: '2021-05-26T11:44:00.524Z',
        dateEnd: '2021-05-31T11:44:00.524Z', approved: false}
    ];

    return {users, categories, vehicles, rentals};
  }

  getRentalsByUser(id: number) {
    const rentals = this.createDb().rentals;
    const rentalsByUser = _.filter(rentals, {idUser: id});

    return rentalsByUser;
  }

  authenticate(body: any) {
    const { username, password } = body;
    const user = this.createDb().users.find(x => x.username === username && x.password === password);

    if (!user) { return this.error('Username e Password errati.'); }

    let role: string;

    if (user.superUser) {
      role = 'admin';
    } else {
      role = 'customer';
    }

    return this.ok({
      id: user.id,
      name: user.name,
      token: `jwt-token-${role}`
    });
  }

  ok(body?: any) {
    return of(new HttpResponse({ status: 200, body }));
  }

  error(message: string) {
    return throwError({ status: 400, error: message });
  }

}
