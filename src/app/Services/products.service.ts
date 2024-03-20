import { Injectable } from '@angular/core';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  sortOrder: 'asc' | 'desc' = 'asc';
  searchText = '';
  products: Product[] = [
    {
      id: '1',
      name: 'Obélix',
      price: 30,
      description:
        "Figurine d'Obélix, le célèbre gaulois, portant une énorme pile de bandes dessinées grâce à sa force décuplée depuis sa chute dans le chaudron de potion magique.",
      imageUrl: 'assets/images/Obélix.jpg',
    },
    {
      id: '2',
      name: 'Astérix',
      price: 37,
      description:
        "Figurine d'Astérix, le célèbre guerrier gaulois portant sa tenue traditionnelle. Il porte son casque ailé, sa tunique rouge et blanche à rayures.",
      imageUrl: 'assets/images/Astérix.webp',
    },
    {
      id: '3',
      name: 'Assurancetourix',
      price: 45,
      description:
        "Figurine d'Assurancetourix, barde du village. Le grand poète incompris et cabotin à la voix défaillante.",
      imageUrl: 'assets/images/Assurancetourix.jpg',
    },
    {
      id: '4',
      name: 'Idéfix',
      price: 78,
      description:
        "Figurine d'Idéfix, le plus fidèle compagnon d'Astérix et Obélix depuis qu'il les a rencontrés dans l'album  Le Tour de Gaulle!.",
      imageUrl: 'assets/images/Idéfix.jpg',
    },
    {
      id: '5',
      name: 'Panoramix',
      price: 23,
      description:
        "Figurine de Panoramix avec une louche de potion magique. À côté, une bulle précise les propos du druide : C'est prêt !.",
      imageUrl: 'assets/images/Panoramix.jpg',
    },
    {
      id: '6',
      name: 'Abraracourix',
      price: 17,
      description:
        "Figurine d'Abraracourcix, le chef du village, n'oubliez pas de lui dire.",
      imageUrl: 'assets/images/Abraracourix.jpg',
    },
  ];

  constructor() {}

  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
  getSortedProducts(): Product[] {
    if (this.sortOrder === 'asc') {
      return this.products.slice().sort((a, b) => a.price - b.price);
    } else {
      return this.products.slice().sort((a, b) => b.price - a.price);
    }
  }
}
