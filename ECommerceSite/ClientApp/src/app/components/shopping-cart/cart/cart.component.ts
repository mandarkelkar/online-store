import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList = []
  cartTotal = 0
  
  constructor(private message: MessageService, private cart: CartService) { }

  ngOnInit(): void {
    this.handleSubscription()
    this.loadCartItem()
  }

  handleSubscription(){
    this.message.getNotification().subscribe((product:Product) => {
      this.loadCartItem()
    })
  }

  loadCartItem(){
    this.cart.getCartItems().subscribe((cartitems: CartItem[]) => {
      this.cartList = cartitems
      this.calculateTotal()
    })
  }

  calculateTotal(){
    this.cartTotal = 0
    this.cartList.forEach(item => this.cartTotal += (item.quantity*item.price))
  }
}
