import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {User} from '../../models/user';
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

  login(credentials) {
    return this.http.post<any>(this.authUrl, {username: credentials.username,
      password: credentials.password}, this.httpOptions);
  }
}
