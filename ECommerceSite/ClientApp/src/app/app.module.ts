import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PostPurchaseComponent } from './components/post-purchase/post-purchase.component';
import { CheckoutItemComponent } from './components/checkout/checkout-item/checkout-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    CheckoutItemComponent, 
    CheckoutComponent,
    PostPurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: ShoppingCartComponent, pathMatch: 'full' },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'post-purchase', component: PostPurchaseComponent}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
