import { Component } from '@angular/core';
import { OrderService } from '../order-service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './confirmation.html',
  styleUrls: ['./confirmation.css'],
})
export class Confirmation {
  constructor(public orderService: OrderService) {}

  get order() {
    return this.orderService.order();
  }
}
