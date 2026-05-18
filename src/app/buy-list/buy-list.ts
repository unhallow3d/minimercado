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
    offer: true,
    quantity: 0
  },
     {
    id: 2,
    name: 'fideos',
    price: 900,
    stock: 5,
    image: 'assets/img/fideos.jpg',
    offer:false,
    quantity: 0
  }
]
upQuantity(product: Product): void{
  if(product.quantity+1<=product.stock)
      product.quantity++;
}
downQuantity(product: Product):void{
  if(product.quantity-1 >=0)
    product.quantity--;
}
changeQuantity(event: any, product: Product ): void{
  console.log (event.key)
}
}
