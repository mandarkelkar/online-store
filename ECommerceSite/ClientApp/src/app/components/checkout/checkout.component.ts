import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
  
  cartList = []
  cartTotal = 0
  shippingCost = 0

  constructor(private message: MessageService, private cart: CartService, private router: Router) { }

  ngOnInit(): void {
    this.handleSubscription()
    this.loadCartItem()
  }

  handleSubscription(){
    this.message.getNotification().subscribe((product:Product) => {
      this.loadCartItem()
    })
    this.message.getNotification().subscribe((msg:string) => {
      this.loadCartItem
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
    this.shippingCost = 0
    this.cartList.forEach(item => this.cartTotal += (item.quantity*item.price))
    
    if (this.cartTotal > 0){
      this.cart.getShippingCost(this.cartTotal).subscribe((value)=>{
        this.shippingCost = value
      })
    }    
  }

  handlePlaceOrder(){
    this.cart.postFinalOrder(this.cartList).subscribe((res)=>{
      if (res.status == 200){
        this.router.navigate(['post-purchase'])
      }
    })
  }

}
