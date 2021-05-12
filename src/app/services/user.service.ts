import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('Fetched Users'))
      );
  }

  getUserById(id: number) {

  }
}