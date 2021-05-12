import { Injectable } from '@angular/core';
import { USERS } from '../volatile_data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return USERS;
  }
}
