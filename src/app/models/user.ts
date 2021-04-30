import {DatePipe} from '@angular/common';

export interface User {
  idUser: number;
  name: string;
  surname: string;
  dateOfBirth: DatePipe;
  fiscalCode: string;
  superUser: boolean;
  username: string;
  password: string;
}
