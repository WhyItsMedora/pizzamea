import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Cart } from './cart/cart';
import { Confirmation } from './confirmation/confirmation';

import { Menu } from './menu/menu';
// import { BuildPizza } from './build-pizza/build-pizza';
// import { Contact } from './contact/contact';
// import { Cart } from './cart/cart';

export const routes: Routes = [
    {path: '', component: Homepage},
    
//Commented out for now, as these pages are not yet implemented
  { path: 'menu', component: Menu },
//   { path: 'build-pizza', component: BuildPizza },
  { path: 'cart', component: Cart },
  { path: 'confirmation', component: Confirmation},
];
