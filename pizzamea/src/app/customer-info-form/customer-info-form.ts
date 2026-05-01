import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-info-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './customer-info-form.html',
  styleUrl: './customer-info-form.css',
})
export class CustomerInfoForm implements OnInit {
  @Input() form!: FormGroup;

  pickupTimes: string[] = [];
  
  generatePickupTimes() {
    const preparationTime = 30;
    const interval = 15;

    const now = new Date();
    const today = now.getDay();

    let openingTime = 0;
    let closingTime = 0;

    if (today >= 1 && today <= 4) {
      openingTime = 11;
      closingTime = 21;
    } else if (today === 5 || today === 6) {
      openingTime = 11;
      closingTime = 23;
    } else {
      openingTime = 12;
      closingTime = 20;
    }

    const opening = new Date();
    opening.setHours(openingTime, 0, 0, 0);

    const closing = new Date();
    closing.setHours(closingTime, 0, 0, 0);

    const earliestPickup = new Date(now.getTime() + preparationTime * 60000);
    const start = new Date(Math.max(opening.getTime(), earliestPickup.getTime()));
    start.setMinutes(Math.ceil(start.getMinutes() / interval) * interval, 0, 0);

    const times: string[] = []
    let current = new Date(start);
    while (current <= closing) {
      times.push(current.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      current = new Date(current.getTime() + interval * 60000);
    }
    
    this.pickupTimes = times;
    console.log(this.pickupTimes);
  }

  ngOnInit() {
    this.generatePickupTimes();
  }
}
