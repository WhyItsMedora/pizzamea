import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: 'home', component: Home },
    { path: 'menu', component: {} as any },
    { path: 'build-pizza', component: {} as any },
    { path: 'contact', component: {} as any },
    { path: 'cart', component: {} as any },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
