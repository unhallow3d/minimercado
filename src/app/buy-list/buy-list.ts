import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-buy-list',
  standalone: false,
  templateUrl: './buy-list.html',
  styleUrl: './buy-list.scss',
})
export class BuyList {
   products: Product[] = [
    {
    id: 0,
    name: 'coca-cola',
    price: 5.00,
    stock: 0,
    image: 'assets/img/coca-cola.jpg',
    offer: true
  },
     {
    id: 2,
    name: 'fideos',
    price: 900,
    stock: 5,
    image: 'assets/img/fideos.jpg',
    offer:false
  }
]
}
