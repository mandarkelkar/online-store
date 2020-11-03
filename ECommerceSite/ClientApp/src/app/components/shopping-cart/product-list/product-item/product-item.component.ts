import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  constructor( private message:MessageService, private cart: CartService) { }

  ngOnInit() {
  }

  handleAddToCart(){
    this.cart.addProductToCart(this.productItem).subscribe(() => this.message.notifyAddProduct(this.productItem))
  }

}
