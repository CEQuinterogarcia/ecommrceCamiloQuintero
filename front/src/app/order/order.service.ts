import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/order/';

  constructor(private http: HttpClient) { }

  getProducts(userId: number): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}get-products`, { userId }); // Enviar userId en el cuerpo de la solicitud
  }
}
