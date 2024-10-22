import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
  @Input() product: any;
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart({ ...this.product, quantity: 1 }); // Asume que deseas agregar 1 por defecto
    //console.log(this.product);
    // Puedes agregar lógica adicional aquí, como mostrar un mensaje de confirmación
  }
}
