import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ProductcardComponent } from './productcard/productcard.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';

// Import the Cloudinary classes.
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';

// Import the plugin.
import {lazyload} from '@cloudinary/ng';

// Import the SDK
import {CloudinaryModule} from '@cloudinary/ng';
import { CartComponent } from './cart/cart.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CartComponent,CloudinaryModule, RouterOutlet, UserComponent, ProductComponent, HeaderComponent, ReactiveFormsModule, HttpClientModule, MatCardModule, ProductcardComponent, HomeComponent, ProductFormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  img!: CloudinaryImage;

  ngOnInit() {

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dovqx8xxt'
      }
    });
  }
}
