import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from './order.service'; // Ajusta la ruta según tu estructura
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],

})
export class OrderComponent implements OnInit {
  orders: any[] = [];
  userId: number = 0;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = +userIdStr;
    }

    this.orderService.getOrder(this.userId).subscribe((data: any[]) => {
      this.orders = data;
      console.log(this.orders);

    });



  }

  printOrder(orderId: number) {
    console.log(orderId);
    this.orderService.expoOrder(orderId).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `order_${orderId}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        console.log('Export successful:', response);
      },
      (error) => {
        console.error('Export failed:', error);
        console.error('Error details:', error.error); // Imprime los detalles del error
      }
    );
  }

}
