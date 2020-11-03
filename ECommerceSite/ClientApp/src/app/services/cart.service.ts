import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartUrl, orderUrl } from 'src/config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, product)
  }

  removeProductsFromCart(productId: number):Observable<any>{
    return this.http.delete(cartUrl + '/' + productId)
  }

  getShippingCost(total:number): Observable<number> {
    return this.http.get<number>(cartUrl + '/' + total)
  }

  getCartItems() {
    return this.http.get<Product[]>(cartUrl).pipe(
      map(result => {
        let cartList:CartItem[] = []
        
        for (let item in result){
          var found = cartList.find(it=>it.productId === result[item].id)
          
          if (typeof(found) == 'undefined'){
            cartList.push({
              id: Number(item),
              productId: result[item].id,
              productName: result[item].name,
              quantity: 1,
              price: result[item].price
            })
          }
          else{
            found.quantity++
          }
        }
        
        return cartList
      })
    )
  }

  postFinalOrder(list: CartItem[]): Observable<any>{
    return this.http.post(orderUrl, list, { observe: 'response' })
  }
}
