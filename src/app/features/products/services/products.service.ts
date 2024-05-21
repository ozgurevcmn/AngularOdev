import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiControllerUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiControllerUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiControllerUrl}/${id}`);
  }

  updateProduct(productId: number, productData: any): Observable<any> {
    return this.http.put<any>(`${this.apiControllerUrl}/${productId}`, productData);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${productId}`);
  }
}
