import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BuyList } from './buy-list/buy-list';
import { BuyCart } from './buy-cart/buy-cart';
import { FormsModule } from '@angular/forms';
import { MinimarketAbout } from './minimarket-about/minimarket-about';
import { MinimarketProducts } from './minimarket-products/minimarket-products';

@NgModule({
  declarations: [App, BuyList, BuyCart, MinimarketAbout, MinimarketProducts],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
