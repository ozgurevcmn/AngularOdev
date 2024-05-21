import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryListItem } from '../models/category-list-item';
import { NewCategory } from '../models/new-category';
import { AddedCategory } from '../models/added-category';
import { Category } from '../models/category'; // Yeni model, tanımlayın

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  getList(): Observable<CategoryListItem[]> {
    return this.http.get<CategoryListItem[]>(this.apiControllerUrl);
  }

  add(category: NewCategory): Observable<AddedCategory> {
    return this.http.post<AddedCategory>(this.apiControllerUrl, category);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiControllerUrl}/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiControllerUrl}/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${id}`);
  }
}
