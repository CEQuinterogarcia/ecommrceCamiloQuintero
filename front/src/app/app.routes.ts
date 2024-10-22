import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';


export const AppRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'productform', component: ProductFormComponent },
  { path: 'cart', component: CartComponent },
  //{ path: 'contact', component: ContactComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }

];

