import { Component } from '@angular/core';
import { PaymentForm } from '../payment-form/payment-form';
import { OrderSummary } from '../order-summary/order-summary';
import { CustomerInfoForm } from '../customer-info-form/customer-info-form';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../order-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [OrderSummary, PaymentForm, CustomerInfoForm, ReactiveFormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(private orderService: OrderService, private router: Router) {}

  group = new FormGroup({
    payment: new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      cardHolder: new FormControl('', Validators.required),
      expirationDate: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
    }),
    customerInfo: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      pickupTime: new FormControl('', Validators.required),
    }),
  });

  get paymentGroup() {
    return this.group.get('payment') as FormGroup;
  }

  get customerInfoGroup() {
    return this.group.get('customerInfo') as FormGroup;
  }

  async placeOrder() {
    const first = this.customerInfoGroup.get('firstName')?.value!;
    const last = this.customerInfoGroup.get('lastName')?.value!;
    const pickup = this.customerInfoGroup.get('pickupTime')?.value!;

    await this.orderService.updateCustomerInfo(first, last, pickup);

    const order = await this.orderService.getOrderById(this.orderService.orderID()!);

    this.router.navigate(['/confirmation']);
  }

  // For testing only, creates an order with no items and empty customer info
  async ngOnInit() {
    await this.orderService.createOrder({
      items: [],
      firstName: '',
      lastName: '',
      pickupTime: ''
    });
  }
}
