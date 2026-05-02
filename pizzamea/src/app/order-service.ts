import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase.config';

export interface Order {
  id?: string,
  items: any[],
  firstName?: string,
  lastName?: string,
  pickupTime?: string,
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  order = signal<Order | null>(null);
  orderID = signal<string | null>(null);

  private orderCollection = collection(db, 'orders');

  async createOrder(order: Order) {
    const orderRef = await addDoc(this.orderCollection, order);

    this.orderID.set(orderRef.id);

    this.order.set({
      ...order,
      id: orderRef.id
    });

    return orderRef.id;
  }

  async updateCustomerInfo(first: string, last: string, pickup: string) {
    const id = this.orderID();

    if (!id) throw new Error('No order ID');

    const orderRef = doc(this.orderCollection, id);

    await updateDoc(orderRef, {
      firstName: first,
      lastName: last,
      pickupTime: pickup,
    });

    this.order.update(current => ({
      ...(current as Order),
      firstName: first,
      lastName: last,
      pickupTime: pickup,
    }));
  }

  async getOrderById(id: string) {
    const ref = doc(this.orderCollection, id);
    const snap = await getDoc(ref);
    return snap.data() as Order;
  }
}