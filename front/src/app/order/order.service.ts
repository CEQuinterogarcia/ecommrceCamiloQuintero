import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/order/';
  //private userId = 2;

  constructor(private http: HttpClient) { }

  getOrder(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${ userId }`); // Enviar userId en el cuerpo de la solicitud
  }

  expoOrder(orderId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}${orderId}/export`, { responseType: 'blob' });
  }
}
