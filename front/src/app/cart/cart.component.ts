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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Suscribirse al carrito y obtener los artículos
    this.cartService.getItems().subscribe(items => {
      this.items = items;
      console.log(items);
      this.calculateTotal();
    });
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


  placeOrder(userId: number) {
    this.cartService.createOrder(userId).subscribe(response => {
      console.log('Pedido creado con éxito:', response);
      this.clearCart(); // Limpiar el carrito después de realizar el pedido
    }, error => {
      console.error('Error al crear el pedido:', error);
    });
  }

}
