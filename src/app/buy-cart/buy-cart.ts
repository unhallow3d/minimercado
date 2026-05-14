import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-cart',
  standalone: false,
  templateUrl: './buy-cart.html',
  styleUrl: './buy-cart.scss',
})
export class BuyCart {
  cartProducts = [
  {
    name: 'Coca Cola',
    description: 'Gaseosa 2L',
    price: 2500,
    quantity: 2,
    image: 'assets/img/coca-cola.jpg'
  },
  {
    name: 'Papas',
    description: 'Papas fritas',
    price: 1800,
    quantity: 1,
    image: 'assets/img/papas.jpg'
  }
];

get total(): number {
  return this.cartProducts.reduce(
    (acc, product) => acc + (product.price * product.quantity),
    0
  );
}
}
