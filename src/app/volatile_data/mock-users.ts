import { User } from '../models/user';

export const USERS: User[] = [
  {
    idUser: 1, name: 'Mattia', surname: 'Brumana', dateOfBirth: new Date('1996-04-03T11:44:00Z'),
    fiscalCode: 'BRMMTT96D03A456E', superUser: true, username: 'm.brumana',
    password: 'admin'
  },
  {
    idUser: 2, name: 'Mario', surname: 'Verdi', dateOfBirth: new Date('1992/09/23'),
    fiscalCode: 'VRDMRO92I23A678H', superUser: false, username: 'm.verdi',
    password: 'fbrss'
  },
  {
    idUser: 3, name: 'Alfonso', surname: 'Bianchi', dateOfBirth: new Date('1995/10/13'),
    fiscalCode: 'BNCLFN95L13A135R', superUser: false, username: 'a.bianchi',
    password: 'alfonso'
  },
  {
    idUser: 4, name: 'Giovanni', surname: 'Rossi', dateOfBirth: new Date('1990/05/13'),
    fiscalCode: 'RSSGVN90E13F765D', superUser: false, username: 'g.rossi',
    password: 'giovanni'
  },
  {
    idUser: 5, name: 'Luca', surname: 'Brambilla', dateOfBirth: new Date('1989/04/22'),
    fiscalCode: 'BRMLCA89D22A456P', superUser: false, username: 'l.brambilla',
    password: 'luca89'
  },
  {
    idUser: 6, name: 'Gianpietro', surname: 'Galli', dateOfBirth: new Date('1984/05/25'),
    fiscalCode: 'GLLGNP84E25G135P', superUser: false, username: 'g.galli',
    password: 'galli'
  }
];
