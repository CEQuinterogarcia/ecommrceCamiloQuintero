import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Ajusta la ruta según tu estructura
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Ajustado aquí
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(response => {
      if (response.token && response.userId) {
        console.log(response.token);

        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.userId); // Guarda el token y el id de usuario en el almacenamiento local
        localStorage.setItem('email', this.email); // Guarda el email en el almacenamiento local
        localStorage.setItem('password', this.password);
        localStorage.setItem('activo', "true");// Guarda la contraseña en el almacenamiento local
        this.router.navigate(['/home']); // Redirige a la página principal después de iniciar sesión
      } else {
        // Maneja el error de autenticación aquí
        console.error('Login failed:');
      }
    }, error => {
      // Maneja el error de autenticación aquí
      console.error('Login failed:', error);
    });
  }
}
