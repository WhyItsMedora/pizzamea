import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuItemComponent } from "../menu-item/menu-item";
import { MenuCategory, MenuItem, MenuService } from "../services/menu.service";
import { OrderService } from "../order-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MenuItemComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  categories: MenuCategory[] = [];

  constructor(
    private menuService: MenuService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.menuService.getCategories();
  }

  async onAddToCart(item: MenuItem) {
    const orderItem = {
      name: item.name,
      price: item.price,
    };

    const currentOrder = this.orderService.order();
    const items = currentOrder ? [...currentOrder.items, orderItem] : [orderItem];

    await this.orderService.createOrder({ items });
  }
}
