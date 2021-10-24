import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = [
  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:4000/notebook')
       .subscribe(res => {
         this.products = res;
         console.log(this.products);
       });
       console.log('api');
  }

}
