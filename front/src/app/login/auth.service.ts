import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users/'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login`, { username, password });
  }

  logout() {
    // Implementa la lógica de cierre de sesión aquí
  }

  isLoggedIn(): boolean {
    // Implementa la lógica para verificar si el usuario está autenticado
    return !!localStorage.getItem('token');
  }
}
