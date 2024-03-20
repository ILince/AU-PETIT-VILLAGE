import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';


@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.css',
})
export class ProductCardsComponent implements OnInit {
  sortOrder: 'asc' | 'desc' = 'asc';
  searchText = '';
  products: any[] = [];
  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.ProductsService.products;
  }
  getProducts(): any[] {
    return this.products;
  }
}