import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../interfaces/cart-item.interface';

@Component({
  selector: 'app-buy-cart',
  standalone: false,
  templateUrl: './buy-cart.html',
  styleUrl: './buy-cart.scss'
})
export class BuyCart implements OnInit {
  private cartService = inject(CartService);

  items: CartItem[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  remove(productId: number): void {
    this.cartService.removeProduct(productId);
    this.refresh();
  }

  clear(): void {
    this.cartService.clearCart();
    this.refresh();
  }
}