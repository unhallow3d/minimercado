import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinimarketAbout } from './minimarket-about/minimarket-about';
import { BuyCart } from './buy-cart/buy-cart';
import { BuyList } from './buy-list/buy-list';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'market',
    pathMatch:'full'
  },
  {
    path:'about',
    component: MinimarketAbout  
  },
  {
    path:'market',
    component: BuyList
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
