import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [];
  private product = [];
  constructor(private http: HttpClient) { }

  getProducts() {
    this.http.get<any>('http://localhost:4000/notebook')
       .subscribe(res => {
         this.products = res;
         console.log('Get Products of services');
         console.log(this.products);
       });
  }

  async getProduct(productId) {
    const params = new HttpParams().append('item_id', productId);
    console.log('se envia params: ', params);
    const response = await this.http.get<any>('http://localhost:4000/item', {params})
      .toPromise();
    console.log('service response', response);
    return response;
  }
}
