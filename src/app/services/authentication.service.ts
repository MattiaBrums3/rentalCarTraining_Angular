import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authUrl = 'http://localhost:8080/api/login';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  user: User;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.authUrl, {username, password}, this.httpOptions)
      .pipe(
        map(user => {
          console.log(user);
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
