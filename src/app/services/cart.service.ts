import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { CartItem } from '../interfaces/cart-item.interface';

@Injectable({ providedIn: 'root' })
export class CartService {

  private items: CartItem[] = [];

  getItems(): CartItem[] {
    return this.items;
  }

  addProduct(product: Product, quantity: number = 1): void {
    const existing = this.items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product: { ...product }, quantity });
    }
  }

  removeProduct(productId: number): void {
    this.items = this.items.filter(i => i.product.id !== productId);
  }

  getTotal(): number {
    return this.items.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  }

  getTotalItems(): number {
    return this.items.reduce((acc, i) => acc + i.quantity, 0);
  }

  clearCart(): void {
    this.items = [];
  }
}