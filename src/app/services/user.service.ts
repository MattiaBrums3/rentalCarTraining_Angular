import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:8080/users';

  httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getUsers() {
    const url = `${this.usersUrl}/get/all`;
    return this.http.get<User[]>(url);
  }

  getUserById(id: number) {
    const url = `${this.usersUrl}/get/${id}`;
    return this.http.get<User>(url);
  }

  saveUser(user: User) {
    const url = `${this.usersUrl}/post/edit`;
    return this.http.post<User>(url, user, this.httpOptions);
  }

  deleteUser(id: number) {
    const url = `${this.usersUrl}/delete/${id}`;
    return this.http.delete<User>(url, this.httpOptions);
  }
}
