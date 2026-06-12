import { Component, inject } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private cartService = inject(CartService);

  get cartTotal(): number {
    return this.cartService.getTotalItems();
  }
}