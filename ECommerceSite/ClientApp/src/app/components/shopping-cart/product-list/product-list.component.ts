import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(){
    console.log(this.productService.getProducts().subscribe())
    this.productService.getProducts().subscribe((products) => {
      this.productsList = products;
    })
  }

}
