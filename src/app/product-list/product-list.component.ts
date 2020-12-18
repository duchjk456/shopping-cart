import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Product} from '../Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products;
  @Output() onDeleteProduct = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deleteProduct(productId: number): void {
    this.onDeleteProduct.emit(productId);
  }

  updateQuantity(quantity): void {
    console.log(quantity.value);
  }


}
