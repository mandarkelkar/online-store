import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})

export class CheckoutItemComponent implements OnInit {

  @Input() checkoutItem: CartItem

  constructor(private cart: CartService, private message: MessageService) { }

  ngOnInit(): void {
  }

  handleRemoveFromCart(){
    this.cart.removeProductsFromCart(this.checkoutItem.productId).subscribe(() =>
    this.message.notifyRemoveItem(this.checkoutItem))
  }

}
