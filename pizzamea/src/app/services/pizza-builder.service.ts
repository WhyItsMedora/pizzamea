import { Injectable, signal, computed } from '@angular/core';

export interface PizzaOption {
  id: string;
  name: string;
  price: number;
}

export interface Pizza {
  size: PizzaOption | null;
  crust: PizzaOption | null;
  sauce: PizzaOption | null;
  cheese: PizzaOption | null;
  toppings: PizzaOption[];
}

@Injectable({
  providedIn: 'root'
})
export class PizzaBuilderService {
  readonly sizes: PizzaOption[] = [
    { id: 'small', name: 'Small (8")', price: 8.99 },
    { id: 'medium', name: 'Medium (12")', price: 11.99 },
    { id: 'large', name: 'Large (16")', price: 14.99 },
    { id: 'xlarge', name: 'X-Large (18")', price: 17.99 },
  ];

  readonly crusts: PizzaOption[] = [
    { id: 'thin', name: 'Thin Crust', price: 0 },
    { id: 'classic', name: 'Classic', price: 0 },
    { id: 'thick', name: 'Thick Crust', price: 0 },
    { id: 'stuffed', name: 'Stuffed Crust', price: 1.99 },
  ];

  readonly sauces: PizzaOption[] = [
    { id: 'marinara', name: 'Marinara', price: 0 },
    { id: 'bbq', name: 'BBQ', price: 0 },
    { id: 'alfredo', name: 'Alfredo', price: 0 },
    { id: 'pesto', name: 'Pesto', price: 0.99 },
    { id: 'buffalo', name: 'Buffalo', price: 0 },
    { id: 'none', name: 'No Sauce', price: 0 },
  ];

  readonly cheeses: PizzaOption[] = [
    { id: 'mozzarella', name: 'Mozzarella', price: 0 },
    { id: 'cheddar', name: 'Cheddar', price: 0 },
    { id: 'provolone', name: 'Provolone', price: 0 },
    { id: 'parmesan', name: 'Parmesan', price: 0 },
    { id: 'extra', name: 'Extra Cheese', price: 1.49 },
    { id: 'none', name: 'No Cheese', price: 0 },
  ];

  readonly meats: PizzaOption[] = [
    { id: 'pepperoni', name: 'Pepperoni', price: 1.49 },
    { id: 'sausage', name: 'Sausage', price: 1.49 },
    { id: 'chicken', name: 'Chicken', price: 1.99 },
    { id: 'bacon', name: 'Bacon', price: 1.49 },
    { id: 'ham', name: 'Ham', price: 1.49 },
    { id: 'beef', name: 'Ground Beef', price: 1.49 },
  ];

  readonly veggies: PizzaOption[] = [
    { id: 'mushrooms', name: 'Mushrooms', price: 0.99 },
    { id: 'peppers', name: 'Bell Peppers', price: 0.99 },
    { id: 'onions', name: 'Onions', price: 0.99 },
    { id: 'olives', name: 'Black Olives', price: 0.99 },
    { id: 'spinach', name: 'Spinach', price: 0.99 },
    { id: 'tomatoes', name: 'Fresh Tomatoes', price: 0.99 },
    { id: 'jalapenos', name: 'Jalapeños', price: 0.99 },
    { id: 'pineapple', name: 'Pineapple', price: 0.99 },
  ];

  private MAX_TOPPINGS = 6;

  pizza = signal<Pizza>({
    size: null,
    crust: null,
    sauce: null,
    cheese: null,
    toppings: [],
  });

  price = computed(() => {
    const p = this.pizza();
    let total = 0;
    if (p.size) total += p.size.price;
    if (p.crust) total += p.crust.price;
    if (p.sauce) total += p.sauce.price;
    if (p.cheese) total += p.cheese.price;
    p.toppings.forEach(t => total += t.price);
    return total;
  });

  setSize(size: PizzaOption) { this.pizza.update(p => ({ ...p, size })); }
  setCrust(crust: PizzaOption) { this.pizza.update(p => ({ ...p, crust })); }
  setSauce(sauce: PizzaOption) { this.pizza.update(p => ({ ...p, sauce })); }
  setCheese(cheese: PizzaOption) { this.pizza.update(p => ({ ...p, cheese })); }

  toggleTopping(topping: PizzaOption) {
    this.pizza.update(p => {
      const exists = p.toppings.find(t => t.id === topping.id);
      if (exists) {
        return { ...p, toppings: p.toppings.filter(t => t.id !== topping.id) };
      } else if (p.toppings.length < this.MAX_TOPPINGS) {
        return { ...p, toppings: [...p.toppings, topping] };
      }
      return p;
    });
  }

  isToppingSelected(id: string): boolean {
    return !!this.pizza().toppings.find(t => t.id === id);
  }

  isValid(): boolean {
    const p = this.pizza();
    return !!p.size && !!p.crust && !!p.sauce && !!p.cheese;
  }

  getPizzaAsOrderItem() {
    const p = this.pizza();
    const toppingNames = p.toppings.map(t => t.name).join(', ');
    return {
      name: `Custom Pizza (${p.size?.name})`,
      description: `${p.crust?.name}, ${p.sauce?.name} sauce, ${p.cheese?.name}${toppingNames ? ', ' + toppingNames : ''}`,
      price: this.price(),
    };
  }

  reset() {
    this.pizza.set({ size: null, crust: null, sauce: null, cheese: null, toppings: [] });
  }
}