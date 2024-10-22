import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { ProductComponent } from '../product/product.component';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../header/header.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent, ProductComponent, LayoutComponent, HeaderComponent, ProductFormComponent, ProductcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}

