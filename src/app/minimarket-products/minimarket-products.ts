import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-minimarket-products',
  standalone: false,
  templateUrl: './minimarket-products.html',
  styleUrl: './minimarket-products.scss'
})
export class MinimarketProducts implements OnInit {
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  categories: string[] = [];
  selectedCategory: string = 'Todos';
  filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.categories = ['Todos', ...this.productsService.getCategories()];
    this.filteredProducts = this.productsService.getProducts();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredProducts = category === 'Todos'
      ? this.productsService.getProducts()
      : this.productsService.getProductsByCategory(category);
  }

  addToCart(product: Product): void {
    this.cartService.addProduct(product, product.quantity || 1);
    alert(`✅ "${product.name}" agregado al carrito`);
  }
}