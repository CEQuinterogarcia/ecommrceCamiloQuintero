import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Ajusta la ruta según tu estructura
import { Router } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(response => {
      if (response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']); // Redirige a la página principal después de iniciar sesión
      } else {
        // Maneja el error de autenticación aquí
      }
    }, error => {
      // Maneja el error de autenticación aquí
      console.error('Login failed:', error);
    });
  }
}
