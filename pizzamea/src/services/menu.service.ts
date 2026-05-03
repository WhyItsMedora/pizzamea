import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  emoji?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuData: MenuCategory[] = [
    {
      name: 'Sides & Appetizers',
      items: [
        { id: 1, name: 'Garlic Knots', description: '6 fresh-baked knots with garlic butter', price: 5.99 },
        { id: 2, name: 'Mozzarella Sticks', description: '6 sticks with marinara sauce', price: 6.99 },
        { id: 3, name: 'Buffalo Wings', description: '8 wings tossed in buffalo sauce', price: 9.99 },
        { id: 4, name: 'BBQ Wings', description: '8 wings tossed in BBQ sauce', price: 9.99 },
        { id: 5, name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, Caesar dressing', price: 7.99 },
        { id: 6, name: 'Garden Salad', description: 'Mixed greens, tomatoes, cucumbers, choice of dressing', price: 6.99 },
        { id: 7, name: 'Breadsticks', description: '8 breadsticks with marinara sauce', price: 4.99 },
        { id: 8, name: 'Cheesy Breadsticks', description: '8 breadsticks topped with melted cheese', price: 6.99 },
        { id: 9, name: 'Jalapeño Poppers', description: '6 poppers stuffed with cream cheese', price: 7.99 },
        { id: 10, name: 'Onion Rings', description: 'Crispy golden onion rings', price: 5.99 },
      ]
    },
    {
      name: 'Desserts',
      items: [
        { id: 11, name: 'Chocolate Chip Cookies', description: '3 warm, fresh-baked cookies', price: 3.99, emoji: '🍪' },
        { id: 12, name: 'Double Chocolate Cookies', description: '3 rich chocolate cookies', price: 3.99, emoji: '🍪' },
        { id: 13, name: 'White Chocolate Macadamia Cookies', description: '3 premium cookies', price: 4.49, emoji: '🍪' },
        { id: 14, name: 'Oatmeal Raisin Cookies', description: '3 classic cookies', price: 3.99, emoji: '🍪' },
        { id: 15, name: 'Fudge Brownies', description: '2 rich, fudgy brownies', price: 4.99, emoji: '🍫' },
        { id: 16, name: 'Walnut Brownies', description: '2 brownies with walnuts', price: 5.49, emoji: '🍫' },
        { id: 17, name: 'Caramel Brownies', description: '2 brownies with caramel swirl', price: 5.49, emoji: '🍫' },
        { id: 18, name: 'Brownie Sundae', description: 'Warm brownie with vanilla ice cream', price: 6.99, emoji: '🍫' },
      ]
    },
    {
      name: 'Drinks',
      items: [
        { id: 19, name: 'Coca-Cola', description: '20 oz bottle', price: 2.49 },
        { id: 20, name: 'Diet Coke', description: '20 oz bottle', price: 2.49 },
        { id: 21, name: 'Sprite', description: '20 oz bottle', price: 2.49 },
        { id: 22, name: 'Dr Pepper', description: '20 oz bottle', price: 2.49 },
        { id: 23, name: 'Root Beer', description: '20 oz bottle', price: 2.49 },
        { id: 24, name: 'Lemonade', description: 'Fresh-squeezed, 20 oz', price: 2.99 },
        { id: 25, name: 'Iced Tea', description: 'Sweet or unsweetened, 20 oz', price: 2.49 },
        { id: 26, name: 'Bottled Water', description: '16 oz bottle', price: 1.99 },
        { id: 27, name: 'Sparkling Water', description: '16 oz bottle', price: 2.49 },
        { id: 28, name: 'Orange Juice', description: '16 oz bottle', price: 3.49 },
        { id: 29, name: 'Apple Juice', description: '16 oz bottle', price: 3.49 },
        { id: 30, name: 'Energy Drink', description: '16 oz can', price: 3.99 },
      ]
    },
    {
      name: 'Extra Sauces & Dressings',
      items: [
        { id: 31, name: 'Ranch Dressing', description: '2 oz cup', price: 0.75 },
        { id: 32, name: 'Blue Cheese Dressing', description: '2 oz cup', price: 0.75 },
        { id: 33, name: 'Marinara Sauce', description: '2 oz cup', price: 0.75 },
        { id: 34, name: 'Garlic Butter', description: '2 oz cup', price: 0.75 },
        { id: 35, name: 'BBQ Sauce', description: '2 oz cup', price: 0.75 },
        { id: 36, name: 'Buffalo Sauce', description: '2 oz cup', price: 0.75 },
        { id: 37, name: 'Honey Mustard', description: '2 oz cup', price: 0.75 },
        { id: 38, name: 'Italian Dressing', description: '2 oz cup', price: 0.75 },
      ]
    }
  ];

  getCategories(): MenuCategory[] {
    return this.menuData;
  }
}