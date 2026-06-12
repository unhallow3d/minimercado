import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-buy-list',
  standalone: false,
  templateUrl: './buy-list.html',
  styleUrl: './buy-list.scss'
})
export class BuyList {
  @Input() products: Product[] = [];
  @Output() addToCart = new EventEmitter<Product>();

  onAdd(product: Product): void {
    if (product.quantity < 1) product.quantity = 1;
    this.addToCart.emit(product);
  }

  maxReached(msg: string): void {
    alert(msg);
  }
}