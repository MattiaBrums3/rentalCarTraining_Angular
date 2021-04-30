import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Category } from './models/category';
import { USERS } from './volatile_data/mock-users';
import { CATEGORIES } from './volatile_data/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

  getUsers() {
    return USERS;
  }

  getCategories() {
    return CATEGORIES;
  }
}
