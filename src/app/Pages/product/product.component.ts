import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Services/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId !== null) {
      this.product = this.productsService.getProductById(productId);
    }
  }
}
