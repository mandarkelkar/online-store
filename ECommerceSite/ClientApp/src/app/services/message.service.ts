import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  subject = new Subject()

  notifyAddProduct(product: Product){
    this.subject.next(product)
  }

  notifyRemoveItem(cartItem: CartItem){
    this.subject.next(cartItem)
  }

  getNotification() {
    return this.subject.asObservable()
  }
}
