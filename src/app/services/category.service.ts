import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {tap} from 'rxjs/operators';
import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'api/categories';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        tap(_ => console.log('Fetched Categories'))
      );
  }
}
