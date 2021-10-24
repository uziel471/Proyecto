import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [];
  product = [];
  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get<any>('http://localhost:4000/notebook')
       .subscribe(res => {
         this.products = res;
         console.log('Get Products of services');
         console.log(this.products);
       });
  }

  async getProduct() {
    // this.http.post<any>('http://localhost:4000/item', { itemId: productId})
    //    .subscribe(res => {
    //      this.product = res;
    //      console.log('Getting data of walmart api');
    //      console.log(this.product);
    //    });
     const response = await this.http.get('http://localhost:4000/item')
     .toPromise();
     console.log('service response', response);
     return response;
  }
}
