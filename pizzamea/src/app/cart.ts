// cart.ts
export interface CartItem {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export const cart: CartItem[] = [];

export function addToCart(item: CartItem) {
  const existing = cart.find(p => p.name === item.name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
}
