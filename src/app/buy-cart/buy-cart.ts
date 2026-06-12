import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/product.service';
import { CartItem } from '../interfaces/cart-item.interface';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-buy-cart',
  standalone: false,
  templateUrl: './buy-cart.html',
  styleUrl: './buy-cart.scss'
})
export class BuyCart implements OnInit {
  private cartService = inject(CartService);
  private productsService = inject(ProductsService);

  items: CartItem[] = [];
  total: number = 0;
  private allProducts: Product[] = [];

  ngOnInit(): void {
    this.allProducts = this.productsService.getProducts();
    this.refresh();
  }

  refresh(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  remove(productId: number): void {
    this.cartService.removeProduct(productId, this.allProducts); // ← devuelve stock
    this.refresh();
  }

  clear(): void {
    this.cartService.clearCart(this.allProducts); // ← devuelve todo el stock
    this.refresh();
  }
}