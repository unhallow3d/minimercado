import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinimarketHome } from './minimarket-home/minimarket-home';
import { MinimarketProducts } from './minimarket-products/minimarket-products';
import { MinimarketAbout } from './minimarket-about/minimarket-about';
import { BuyCart } from './buy-cart/buy-cart';

const routes: Routes = [
  { path: '',         component: MinimarketHome },
  { path: 'products', component: MinimarketProducts },
  { path: 'cart',     component: BuyCart },
  { path: 'about',    component: MinimarketAbout },
  { path: '**',       redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}