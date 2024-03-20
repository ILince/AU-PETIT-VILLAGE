import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private ProductsService: ProductsService) {}
}
