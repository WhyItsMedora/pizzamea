import { Component } from '@angular/core';
import { PaymentForm } from '../payment-form/payment-form';
import { OrderSummary } from '../order-summary/order-summary';
import { CustomerInfoForm } from '../customer-info-form/customer-info-form';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [OrderSummary, PaymentForm, CustomerInfoForm, ReactiveFormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
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
}
