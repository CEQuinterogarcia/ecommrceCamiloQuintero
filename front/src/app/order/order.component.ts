import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service'; // Asegúrate de que la ruta es correcta
import { Observable } from 'rxjs';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  pedidos: any[] = [];
  userId: number = 1;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.orderService.getProducts(this.userId).subscribe(
      (data) => {
        this.pedidos = data; // Guarda los productos en el arreglo
        console.log('Productos obtenidos:', this.pedidos);
      },
      (error) => {
        console.error('Error al obtener productos:', error); // Manejo de errores
      }
    );
  }
}
