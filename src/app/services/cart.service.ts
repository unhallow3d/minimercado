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
    // ← descuenta del stock original
    product.stock -= quantity;
    if (product.stock < 0) product.stock = 0;
  }

  removeProduct(productId: number, products: Product[]): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      // ← devuelve el stock al eliminar del carrito
      const original = products.find(p => p.id === productId);
      if (original) original.stock += item.quantity;
    }
    this.items = this.items.filter(i => i.product.id !== productId);
  }

  getTotal(): number {
    return this.items.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
  }

  getTotalItems(): number {
    return this.items.reduce((acc, i) => acc + i.quantity, 0);
  }

  clearCart(products?: Product[]): void {
    // ← devuelve todo el stock al vaciar
    if (products) {
      this.items.forEach(item => {
        const original = products.find(p => p.id === item.product.id);
        if (original) original.stock += item.quantity;
      });
    }
    this.items = [];
  }
}