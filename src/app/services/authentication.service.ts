import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {InMemoryDataService} from './in-memory-data.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;

  constructor(private inMemoryDataService: InMemoryDataService) {}

  login(username: string, password: string) {
    return this.inMemoryDataService.authenticate({username, password})
      .pipe(
        map(user => {
          this.user = user.body;
          sessionStorage.setItem('id', user.body.id);
          sessionStorage.setItem('name', user.body.name);
          sessionStorage.setItem('token', user.body.token);
          return this.user;
        })
      );
  }

  logout() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('token');
  }
}
