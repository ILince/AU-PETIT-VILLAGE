import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], sortOrder: 'asc' | 'desc'): any[] {
    if (sortOrder === 'asc') {
      return products.slice().sort((a, b) => a.price - b.price);
    } else {
      return products.slice().sort((a, b) => b.price - a.price);
    }
  }
}
