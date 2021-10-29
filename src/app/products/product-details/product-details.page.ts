import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public product = [];
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    ) { }

  async ngOnInit() {
    //se obtiene el id desde la url
    const recipeId = this.activatedRoute.snapshot.paramMap.get('productId');

    // TO DO: mejorar esta shit
    this.product.push(await this.getItem(recipeId));
    console.log('traer 1 solo producto', this.product);
    return this.product;
  }

  async getItem(recipeId) {
    console.log('getItem function recived this : ', recipeId);
    const item = await this.productsService.getProduct(recipeId);
    console.log('i will return this: ', item);
    return item;
  }

  abrirCarrito(){
    console.log('abrir carrito');
  }
}
