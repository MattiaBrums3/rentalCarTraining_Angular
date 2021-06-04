import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:8080/api/users';

  httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id: number) {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  saveUser(user: User) {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

  deleteUser(id: number) {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }
}
