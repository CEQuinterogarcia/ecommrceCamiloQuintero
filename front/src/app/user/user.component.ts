import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
username = 'CEQUINTERO';
login = false;
clic(){
  alert('Hola click')
  this.login=false;
}
}
