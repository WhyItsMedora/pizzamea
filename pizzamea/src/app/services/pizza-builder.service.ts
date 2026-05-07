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
  drizzles?: PizzaOption[];
  extras?: PizzaOption[];
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
    { id: 'White', name: 'White Sauce', price: 0 },
    { id: 'spicy', name: 'Spicy Red Sauce', price: 0 },
    { id: 'garlic', name: 'Garlic Pesto', price: 0 },
    { id: 'bbq', name: 'BBQ', price: 0 },
    { id: 'buffalo', name: 'Buffalo', price: 0 },
    { id: 'none', name: 'No Sauce', price: 0 },
  ];

  readonly cheeses: PizzaOption[] = [
    { id: 'fresh_mozzarella', name: 'Fresh Mozzarella', price: 0 },
    { id: 'shredded_mozzarella', name: 'Shredded Mozzarella', price: 0 },
    { id: 'cheddar', name: 'Cheddar', price: 0 },
    { id: 'provolone', name: 'Provolone', price: 0 },
    { id: 'parmesan', name: 'Parmesan', price: 0 },
    {id: 'ricotta', name: 'Ricotta', price: 0 },
    {id: 'feta', name: 'Feta Cheese', price: 0 },
    {id: 'gorgonzola', name: 'Gorgonzola', price: 0 },
    { id: 'none', name: 'No Cheese', price: 0 },
  ];

  readonly meats: PizzaOption[] = [
    { id: 'pepperoni', name: 'Pepperoni', price: 1.49 },
    { id: 'sausage', name: 'Italian Sausage', price: 1.49 },
    { id: 'chorizo', name: 'Spicy Chorizo', price: 1.49 },
    { id: 'chicken', name: 'Grilled Chicken', price: 1.99 },
    { id: 'bacon', name: 'Bacon', price: 1.49 },
    { id: 'ham', name: 'Canadian Bacon', price: 1.49 },
    { id: 'beef', name: 'Ground Beef', price: 1.49 },
  ];

  readonly veggies: PizzaOption[] = [
    
    { id: 'mushrooms', name: 'Mushrooms', price: 0.99 },
    { id: 'peppers', name: 'Bell Peppers', price: 0.99 },
    { id: 'roasted_peppers', name: 'Roasted Bell Peppers', price: 0.99 },
    { id: 'tomatoes', name: 'Fresh Cherry Tomatoes', price: 0.99 },
    { id: 'roasted_tomatoes', name: 'Roasted Cherry Tomatoes', price: 0.99 },
    { id: 'garlic', name: 'Garlic', price: 0.49 },
    { id: 'roasted_garlic', name: 'Roasted Garlic', price: 0.99 },
    { id: 'yellow_onions', name: 'Yellow Onions', price: 0.99 },
    { id: 'red_onions', name: 'Red Onions', price: 0.99 },
    { id: 'roasted_onions', name: 'Roasted Onions', price: 0.99 },
    { id: 'olives', name: 'Black Olives', price: 0.99 },
    { id: 'green_olives', name: 'Green Olives', price: 0.99 },
    { id: 'spinach', name: 'Spinach', price: 0.99 },
    { id: 'jalapenos', name: 'Jalapeños', price: 0.99 },
    { id: 'pineapple', name: 'Pineapple', price: 0.99 },
  ];

  readonly extras: PizzaOption[] = [
    { id: 'extra_cheese', name: 'Extra Cheese', price: 1.49 },
    { id: 'extra_sauce', name: 'Extra Sauce', price: 0.99 },
    { id: 'basil', name: 'Fresh Basil', price: 0 },
    { id: 'oregano', name: 'Oregano', price: 0 },
    { id: 'sea_salt', name: 'Sea Salt', price: 0 },
    { id: 'pepper', name: 'Cracked Black Pepper', price: 0 },
    
  ];

  readonly drizzles: PizzaOption[] = [
    { id: 'olive_oil', name: 'Olive Oil Drizzle', price: 0.99 },
    { id: 'ranch', name: 'Ranch Drizzle', price: 0.99 },
    { id: 'franks_red_hot', name: 'Frank’s Red Hot Drizzle', price: 0.99 },
    { id: 'bbq', name: 'BBQ Drizzle', price: 0.99 },
    { id: 'pesto', name: 'Pesto Drizzle', price: 0.99 },
  ];

  private MAX_TOPPINGS = 8;
  private MAX_DRIZZLES = 2;
  private MAX_EXTRAS = 3;

  pizza = signal<Pizza>({
    size: null,
    crust: null,
    sauce: null,
    cheese: null,
    toppings: [],
    drizzles: [],
    extras: [],
  });

  price = computed(() => {
    const p = this.pizza();
    let total = 0;
    if (p.size) total += p.size.price;
    if (p.crust) total += p.crust.price;
    if (p.sauce) total += p.sauce.price;
    if (p.cheese) total += p.cheese.price;
    p.toppings.forEach(t => total += t.price);
    p.drizzles?.forEach(d => total += d.price);
    p.extras?.forEach(e => total += e.price);
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

  toggleDrizzle(drizzle: PizzaOption) {
    this.pizza.update(p => {
      const exists = p.drizzles?.find(d => d.id === drizzle.id);
      if (exists) {
        return { ...p, drizzles: p.drizzles!.filter(d => d.id !== drizzle.id) };
      } else if (p.drizzles!.length < this.MAX_DRIZZLES) {
        return { ...p, drizzles: [...p.drizzles!, drizzle] };
      }
      return p;
    });
  }

 toggleExtra(extra: PizzaOption) {
  this.pizza.update(p => {
    const exists = p.extras?.find(e => e.id === extra.id);
    if (exists) {
      return { ...p, extras: p.extras!.filter(e => e.id !== extra.id) };
    } else if (p.extras!.length < this.MAX_EXTRAS) {
      return { ...p, extras: [...p.extras!, extra] };
    }
    return p;
  });
}

  isToppingSelected(id: string): boolean {
    return !!this.pizza().toppings.find(t => t.id === id);
  }

  isDrizzleSelected(id: string): boolean {
  return !!this.pizza().drizzles?.find(d => d.id === id);
  }

  isExtraSelected(id: string): boolean {
    return !!this.pizza().extras?.find(e => e.id === id);
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
    this.pizza.set({ size: null, crust: null, sauce: null, cheese: null, toppings: [], drizzles: [], extras: [] });
  }
}