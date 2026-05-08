import { Component, Input } from '@angular/core';
import { OrderService } from '../order-service';
import { NgForOf, NgIf, CurrencyPipe, NgClass } from "@angular/common";

@Component({
  selector: 'app-order-summary',
  imports: [NgForOf, NgIf, CurrencyPipe, NgClass],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary {

  @Input() confirmationMode = false;
  @Input() allowRemoval = true;

  constructor(private orderService: OrderService) {}

  async ngOnInit() {
    const id = this.orderService.orderID();
    if (!id) {
      return;
    }
    const order = await this.orderService.getOrderById(id);
    this.orderService.order.set(order);
  }

  get order() {
    return this.orderService.order();
  }

  get total() {
    if (!this.order || !this.order.items) return 0;

    return this.order.items.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      return sum + price;
    }, 0);
  }

  removeItem(index: number) {
    this.orderService.removeItemFromOrder(index);
  }
}
