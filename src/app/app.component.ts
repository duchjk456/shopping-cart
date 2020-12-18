import {Component} from '@angular/core';
import {Product} from './Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping cart';
  products: Product[] = [
    {
      id: 3,
      name: 'iPhone 12 Mini Chính hãng (VN/A)',
      description: 'iPhone 12 Mini 64GB',
      thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-mini-blue-select-2020_4.png',
      price: 18900,
      quantity: 5
    },
    {
      id: 4,
      name: 'iPhone 12 Pro Max Chính Hãng (VN/A)',
      description: 'iPhone 12 Pro 256GB',
      thumbnail: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/1000x/040ec09b1e35df139433887a97daa66f/p/h/photo_2020-10-13_22-12-33.jpg_1_2.png',
      price: 33590,
      quantity: 2
    }
  ];
   // Khai báo hai giá trị số lượng sản phẩm và tổng tiền ban đầu
  numberItems: number = 3;
  subTotal: number = 460.18;

  deleteProduct(productId: number): void {
    alert('abbr');
    // Xóa 1 sản phẩm
    const index = this.products.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    // Tính lại tổng số lượng sản phẩm và tiền
    let numberItems = 0;
    let subTotal = 0;

    for (const product of this.products) {
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberItems = numberItems;
    this.subTotal = subTotal;
  }


}
