import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from './cart.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // Cambiado a "styleUrls" (array)
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total: number = 0;
  userId: number | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Suscribirse al carrito y obtener los artículos
    this.cartService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
      this.calculateTotal();
    });

    // Recupera el userId de localStorage y verifica si no es null
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = +userIdStr;
    }

  }

  // Método para calcular el total
  calculateTotal() {
    this.total = this.cartService.getTotal(); // Usa el método del servicio para calcular el total
  }

  // Método para eliminar un producto del carrito
  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.calculateTotal(); // Recalcular el total después de eliminar
  }

  // Método para vaciar el carrito
  clearCart() {
    this.cartService.clearCart();
    this.calculateTotal(); // Recalcular el total después de vaciar
  }


  placeOrder() {
    if (this.userId !== null ) {
     // console.log('enviar order for user:', this.userId);
      if (this.total != 0) {
        this.cartService.createOrder(this.userId).subscribe(
          response => {
            console.log('Pedido creado con éxito', response);
            this.clearCart(); // Limpiar el carrito después de realizar el pedido
          },
          error => {
            console.error('Error crear pedido', error);
          }
        );
      }

    } else {
      console.error('User ID is null');
    }
  }

}
