import { Injectable } from '@angular/core';
import {Category} from '../models/category';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesUrl = 'http://localhost:8080/categories';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getCategories() {
    const url = `${this.categoriesUrl}/get/all`;
    return this.http.get<Category[]>(url);
  }

  getCategoryById(id: number) {
    const url = `${this.categoriesUrl}/get/${id}`;
    return this.http.get<Category>(url);
  }

  saveCategory(category: Category) {
    const url = `${this.categoriesUrl}/post/edit`;
    return this.http.post<Category>(url, category, this.httpOptions);
  }

  deleteCategory(id: number) {
    const url = `${this.categoriesUrl}/delete/${id}`;
    return this.http.delete<Category>(url, this.httpOptions);
  }
}
