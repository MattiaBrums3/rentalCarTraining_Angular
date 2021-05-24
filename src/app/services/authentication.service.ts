import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {InMemoryDataService} from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private inMemoryDataService: InMemoryDataService) {}

  login(username: string, password: string) {
    return this.inMemoryDataService.authenticate({username, password})
      .pipe(
        map(user => {
          console.log(user);
        })
      );
  }

  logout() {

  }
}
