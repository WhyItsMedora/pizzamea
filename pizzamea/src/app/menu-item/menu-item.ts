import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../services/menu.service';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
  @Output() addToCart = new EventEmitter<MenuItem>();

  onAddToCart() {
    this.addToCart.emit(this.item);
  }
}
