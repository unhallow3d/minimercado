import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  private products: Product[] = [
    { id: 1, name: 'Coca-Cola 2.25L', price: 1900, stock: 0, image: 'assets/img/coca-cola.jpg', offer: true,  quantity: 0, category: 'Bebidas',           description: 'Gaseosa sabor cola' },
    { id: 2, name: 'Fideos 500g',      price: 900,  stock: 5, image: 'assets/img/fideos.jpg',   offer: false, quantity: 0, category: 'Almacén',            description: 'Fideos mostachol' },
    { id: 3, name: 'Leche entera 1L',  price: 1200, stock: 8, image: 'assets/img/leche.jpg',    offer: false, quantity: 0, category: 'Lácteos',             description: 'Leche entera larga vida' },
    { id: 4, name: 'Pan lactal',        price: 1500, stock: 4, image: 'assets/img/pan.jpg',      offer: true,  quantity: 0, category: 'Panadería',           description: 'Pan de molde' },
    { id: 5, name: 'Manzanas 1kg',     price: 1800, stock: 12, image: 'assets/img/manzanas.jpg', offer: false, quantity: 0, category: 'Frutas y Verduras',  description: 'Manzanas frescas' },
    { id: 6, name: 'Arroz 1kg',        price: 1100, stock: 20, image: 'assets/img/arroz.jpg',    offer: false, quantity: 0, category: 'Almacén',            description: 'Arroz blanco largo fino' },
    { id: 7, name: 'Yogur natural',    price: 850,  stock: 6, image: 'assets/img/yogur.jpg',    offer: false, quantity: 0, category: 'Lácteos',             description: 'Yogur natural sin azúcar' },
    { id: 8, name: 'Agua mineral 2L',  price: 700,  stock: 30, image: 'assets/img/agua.jpg',    offer: true,  quantity: 0, category: 'Bebidas',             description: 'Agua mineral sin gas' },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }
}