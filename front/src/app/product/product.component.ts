import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductcardComponent } from '../productcard/productcard.component';
import { ProductService } from '../product/product.service'; // Asegúrate de que la ruta sea correcta
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductcardComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] // Cambiado a 'styleUrls'
})
export class ProductComponent implements OnInit {
  products: any[] = []; // Asegúrate de inicializar como un array

  constructor(private productService: ProductService) { } // Inyectar el servicio

  ngOnInit(): void {
    this.loadProducts(); // Cargar productos al inicializar
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data; // Asignar los datos recibidos a la variable products
      },
      (error) => {
        console.error('Error al cargar productos', error); // Manejo de errores
      }
    );
  }
}
