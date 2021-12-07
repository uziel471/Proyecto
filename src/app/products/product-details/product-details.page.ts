import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public quantity: number;
  public product = [];
  private selectedProducts = [];
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    public toastController: ToastController,
    ) { }
    async presentToast(msg, type) {
      const toast = await this.toastController.create({
        position: 'top',
        color: type,
        message: msg,
        duration: 2000
      });
      toast.present();
    }

  async ngOnInit() {
    //se obtiene el id desde la url
    const recipeId = this.activatedRoute.snapshot.paramMap.get('productId');

    // TO DO: mejorar esta shit
    this.product.push(await this.getItem(recipeId));
    return this.product;
  }

  async getItem(recipeId) {
    console.log('getItem function recived this : ', recipeId);
    const item = await this.productsService.getProduct(recipeId);
    return item;
  }

  abrirCarrito(){
    console.log('abrir carrito');
  }

  getProductSelected(product) {
    if (this.quantity < 1 || this.quantity === undefined ) {
      this.presentToast('La cantidad debe ser mayor a 0', 'danger');
      console.log(this.quantity);
      return;
    }
    const newProduct = {
      id: product.id,
      title: product.title,
      link: product.link,
      image: product.image,
      rating: product.rating,
      price: product.price,
      priceSymbol: 'USD',
      plataforma: product.plataforma,
      categoria: 1,
      quantity: this.quantity,
    };
    this.saveProductSelected(newProduct);
  }
  async saveProductSelected(product) {
    console.log('saving', product);
    const getList = localStorage.getItem('temporalList');
    if (getList === null ) {
      const initProduct = [];
      console.log('null');
      initProduct.push(product);
      localStorage.setItem('temporalList', JSON.stringify(initProduct));
      return;
    }
    const list = JSON.parse(getList);
    const filteredData = list.filter((item) => item.id !== product.id);

    filteredData.push(product);
    localStorage.setItem('temporalList', JSON.stringify(filteredData));
    this.presentToast('Guardando correctamente', 'success');
  }
}
