import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuItemComponent } from "../menu-item/menu-item";
import { MenuCategory, MenuService } from "../services/menu.service";


@Component({
    selector: 'app-menu',
    imports: [CommonModule, RouterModule, MenuItemComponent],
    templateUrl: './menu.html',
    styleUrl: './menu.css'
})

export class Menu implements OnInit{
    categories:MenuCategory[] = [];

    constructor(private menuService: MenuService){

    }

    ngOnInit() {
        this.categories = this.menuService.getCategories();
    }

    // onAddToCart(item: MenuItem){
        //still need to wire up to OrderService when its created
        // console.log('Added to cart:', item);
        // alert('${item.name} added to cart');
    // }
}