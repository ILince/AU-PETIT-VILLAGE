import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private ProductsService: ProductsService) {}

}
