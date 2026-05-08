import { Component } from '@angular/core';
import { OrderService } from '../order-service';
import { Router } from '@angular/router';
import { getTodayPizza } from '../pizza-of-the-day';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  pizzaOfTheDay = getTodayPizza();
  
  constructor(private orderService: OrderService, private router: Router) {}

  async orderPizzaOfTheDay() {
    const pizzaItem = {
      name: this.pizzaOfTheDay.name,
      price: this.pizzaOfTheDay.price,
      image: this.pizzaOfTheDay.image,
      quantity: 1
    };

    const currentOrder = this.orderService.order();
    const items = currentOrder ? [...currentOrder.items, pizzaItem] : [pizzaItem];

    await this.orderService.createOrder({ items });

    this.router.navigate(['/cart']);
  }
}
