import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  product?: { // Agrega una referencia al objeto del producto si es necesario
    id: number;
    name: string;
    price: number;

  };
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];
  private cartItems = new BehaviorSubject<CartItem[]>(this.items);


  constructor(private http: HttpClient) {}

  getItems() {
    return this.cartItems.asObservable();
  }

  addToCart(product: CartItem) {


    // Buscar si el producto ya existe en el carrito
    const existingItem = this.items.find(item => item.id === product.id &&
      item.name === product.name);
    console.log(this.items);
    if (existingItem) {
      // Si ya existe, aumentar la cantidad
      existingItem.quantity += product.quantity; // <-- Aquí solo se actualiza la cantidad
    } else {
      // Si no existe, agregarlo como un nuevo producto
      this.items.push(product);  // <-- Se agrega el producto
     //console.log(product);
    }
    console.log(this.items);

    // Actualizar el carrito
    this.cartItems.next([...this.items]); // <-- Asegurarse de que se pase una nueva referencia al array
  }


  createOrder(userId: number) {
    // Convertir los CartItems a OrderItems
    console.log(this.items);
    const orderItems: OrderItem[] = this.items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      product: { // Esto es opcional, solo si necesitas más detalles del producto
        id: item.id, // Puedes reemplazar con el ID real del producto si es necesario
        name: item.name,
        price: item.price
      }
    }));
    console.log(orderItems);
    const orderData = {
      userId: userId,
      cartItems: orderItems // Aquí pasamos el array de OrderItems
    };

    //console.log(orderData);

    return this.http.post('http://localhost:3000/order/create', orderData);
  }


  removeFromCart(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
    this.cartItems.next([...this.items]);
  }

  clearCart() {
    this.items = [];
    this.cartItems.next([]);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
