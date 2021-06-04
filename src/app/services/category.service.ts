import { Injectable } from '@angular/core';
import {Category} from '../models/category';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'http://localhost:8080/api/categories';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getCategoryById(id: number) {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url);
  }

  saveCategory(category: Category) {
    return this.http.post<Category>(this.categoriesUrl, category, this.httpOptions);
  }

  deleteCategory(id: number) {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.delete<Category>(url, this.httpOptions);
  }
}
