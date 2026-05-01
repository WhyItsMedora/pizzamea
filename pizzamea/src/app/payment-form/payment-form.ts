import { Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './payment-form.html',
  styleUrl: './payment-form.css',
})
export class PaymentForm {
  @Input() form!: FormGroup;
}
