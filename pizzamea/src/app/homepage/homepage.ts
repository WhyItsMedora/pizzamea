import { Component } from '@angular/core';
import { getTodayPizza } from '../pizza-of-the-day';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  pizzaOfTheDay = getTodayPizza();
}
