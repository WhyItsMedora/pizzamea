import { Component } from '@angular/core';
import { OrderService } from '../order-service';
import { NgIf } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { OrderSummary } from "../order-summary/order-summary";

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NgIf, RouterLink, OrderSummary],
  templateUrl: './confirmation.html',
  styleUrls: ['./confirmation.css'],
})
export class Confirmation {
  constructor(
    public orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.getOrderById(id);
    }
  }

  ngOnDestroy() {
    this.orderService.clearOrder();
  }

  get order() {
    return this.orderService.order();
  }
}
