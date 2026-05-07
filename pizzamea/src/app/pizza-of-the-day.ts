export function getTodayPizza(): PizzaOfTheDay {
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  // const day = "Friday"; -- IGNORE - for testing purposes
  return pizzasByDay[day];
}

export interface PizzaOfTheDay {
  id: string;
  name: string;
  description: string;
  toppings: string[];
  price: number;
  oldPrice: number;
  image: string;
  day: string;
}

export const pizzasByDay: Record<string, PizzaOfTheDay> = {
  Monday: {
    id: 'spicy_italian_supreme',
    name: 'Spicy Italian Supreme',
    description:
      'Pepperoni, Italian sausage, jalapeños, red onions, fresh mozzarella, and our spicy red sauce on a wood-fired crust',
    toppings: [
      'pepperoni',
      'sausage',
      'jalapenos',
      'red_onions',
      'fresh_mozzarella',
      'spicy'
    ],
    price: 12.95,
    oldPrice: 16.95,
    image: 'images/Spicy-Italian-ai.png',
    day: 'Monday'
  },

  Tuesday: {
    id: 'margherita_fresh',
    name: 'Fresh Margherita',
    description:
      'Fresh mozzarella, basil, roasted cherry tomatoes, and olive oil on a large crispy thin crust',
    toppings: [
      'marinara',
      'fresh_mozzarella',
      'tomatoes',
      'basil',
      'olive_oil'
    ],
    price: 12.57,
    oldPrice: 16.57,
    image: 'images/Margherita-ai.png',
    day: 'Tuesday'
  },

  Wednesday: {
    id: 'bbq_chicken',
    name: 'BBQ Chicken Delight',
    description:
      'Grilled chicken, red onions, cheddar, and BBQ sauce on a golden crust',
    toppings: [
      'chicken',
      'red_onions',
      'cheddar',
      'bbq',
      'bbq_drizzle'
    ],
    price: 12.56,
    oldPrice: 15.56,
    image: 'images/BBQ-Chicken-Delight-ai.png',
    day: 'Wednesday'
  },

  Thursday: {
    id: 'veggie_supreme',
    name: 'Veggie Supreme',
    description:
      'Bell peppers, mushrooms, black olives, red onions, basil, and shredded mozzarella drizzled with olive oil and italian seasoning on a thin crust  ',
    toppings: [
      'marinara',
      'bell_peppers',
      'mushrooms',
      'black_olives',
      'red_onions',
      'basil',
      'shredded_mozzarella',
      'olive_oil',
      'italian_seasoning'
    ],
    price: 13.03,
    oldPrice: 17.03,
    image: 'images/Veggie-ai.png',
    day: 'Thursday'
  },

  Friday: {
    id: 'meat_lovers',
    name: 'Ultimate Meat Lovers',
    description:
      'Pepperoni, Italian sausage, bacon, Canadian bacon, and mozzarella on a thick crust',
    toppings: [
      'pepperoni',
      'sausage',
      'bacon',
      'ham',
      'shredded_mozzarella'
    ],
    price: 13.95,
    oldPrice: 17.95,
    image: 'images/Meat-Lovers-ai.png',
    day: 'Friday'
  },

  Saturday: {
    id: 'hawaiian_fire',
    name: 'Hawaiian Fire',
    description:
      'Canadian bacon, pineapple, jalapeños, and mozzarella',
    toppings: [
      'ham',
      'pineapple',
      'jalapenos',
      'shredded_mozzarella'
    ],
    price: 12.49,
    oldPrice: 15.49,
    image: 'images/Hawaiian-Fire-ai.png',
    day: 'Saturday'
  },

  Sunday: {
    id: 'four_cheese',
    name: 'Four Cheese Blend',
    description:
      'Fresh mozzarella, provolone, ricotta, and gorgonzola on a stuffed crust',
    toppings: [
      'fresh_mozzarella',
      'provolone',
      'ricotta',
      'gorgonzola'
    ],
    price: 12.95,
    oldPrice: 15.95,
    image: 'images/Four-Cheese-Blend-ai.png',
    day: 'Sunday'
  }
};
