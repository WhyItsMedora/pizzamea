import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Cart } from './cart/cart';
import { Confirmation } from './confirmation/confirmation';
import { Menu } from './menu/menu';
import { CustomizePizza } from './customize-pizza/customize-pizza';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'menu', component: Menu },
  { path: 'customize-pizza', component: CustomizePizza },
  { path: 'cart', component: Cart },
  { path: 'confirmation/:id', component: Confirmation }
];
