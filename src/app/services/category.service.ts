import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {tap} from 'rxjs/operators';
import {Category} from '../models/category';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'api/categories';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        tap(_ => console.log('Fetched Categories'))
      );
  }

  getCategoryById(id: number) {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url)
      .pipe(
        tap(_ => console.log(`Fetched Category ${id}`))
      );
  }

  saveCategory(category: Category) {
    return this.http.post<Category>(this.categoriesUrl, category, this.httpOptions);
  }

  deleteCategory(id: number) {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.delete<Category>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Deleted Category ${id}`))
      );
  }
}
