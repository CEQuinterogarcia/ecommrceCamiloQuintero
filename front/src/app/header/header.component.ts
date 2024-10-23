import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToAddProduct() {
    this.router.navigate(['/productform']);
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }

  navigateDetail() {
    this.router.navigate(['/detail']);
  }

  navigatecart() {
    this.router.navigate(['/cart']);
  }

  navigateOrder(){
    this.router.navigate(['/order']);
  }
}
