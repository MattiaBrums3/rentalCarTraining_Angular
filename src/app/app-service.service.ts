import { Injectable } from '@angular/core';
import { USERS } from './volatile_data/mock-users';
import { CATEGORIES } from './volatile_data/mock-categories';
import { VEHICLES } from './volatile_data/mock-vehicles';

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

  getVehicles() {
    return VEHICLES;
  }
}
