import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('Fetched Users'))
      );
  }

  getUserById(id: number) {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        tap(_ => console.log(`Fetched User ${id}`))
      );
  }

  saveUser(user: User) {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  deleteUser(id: number) {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Deleted User ${id}`))
      );
  }
}
