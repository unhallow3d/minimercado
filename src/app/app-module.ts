import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { BuyList } from './buy-list/buy-list';
import { BuyCart } from './buy-cart/buy-cart';
import { MinimarketAbout } from './minimarket-about/minimarket-about';
import { MinimarketProducts } from './minimarket-products/minimarket-products';
import { MinimarketHome } from './minimarket-home/minimarket-home';
import { InputInteger } from './input-integer/input-integer';

@NgModule({
  declarations: [
    App,
    BuyList,
    BuyCart,
    MinimarketHome,
    MinimarketAbout,
    MinimarketProducts,
    InputInteger,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}