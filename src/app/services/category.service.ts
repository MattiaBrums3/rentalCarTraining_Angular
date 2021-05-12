import { Injectable } from '@angular/core';
import { CATEGORIES } from '../volatile_data/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }
}
