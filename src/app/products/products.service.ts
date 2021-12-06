import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = [];
  private product = [];
  constructor(private http: HttpClient, private router: Router) { }

  /* Inicializa super implementación de Tercero */
    ionViewWillEnter(){
      this.login();  
    }

    login(){
      console.log('Comprobando');

      if(!window.localStorage.getItem('@session')){
        this.router.navigateByUrl('/login')
        console.log('no esta')
      }
    }

  /* Finaliza super implementación de Tercero */


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
