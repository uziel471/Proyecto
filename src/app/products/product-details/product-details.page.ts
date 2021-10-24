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
  item = [];
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    ) { }

  async ngOnInit() {
    const recipeId = this.activatedRoute.snapshot.paramMap.get('productId');
    console.log('id: ', recipeId);

    const producto = await this.productsService.getProduct();
    console.log('traer 1 solo producto', producto);
    return producto;
  }
}
