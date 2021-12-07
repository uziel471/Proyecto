import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  valueSelectedSegment = 1;
  initialProducts = [];
  filteredProducts = [];
  selectedProducts = [];
  constructor(private http: HttpClient, public toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.getInitialData();
  }

  async presentToast(msg, type) {
    const toast = await this.toastController.create({
      position: 'top',
      color: type,
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getInitialData() {
    this.http.get<any>('http://localhost:4000/notebook')
       .subscribe(res => {
         // como es local no es necesario cargar de nuevo los datos
         // de la peticion ya que es un un archivo json
         // borrar condicion cuando se haga peticiones directas al api
         if (this.initialProducts.length <= 0 ){
          this.initialProducts = res;
         }
          console.log('initial products', this.initialProducts);
          this.filteredProducts = this.filterData(this.initialProducts);
          console.log('filtered Products by plataforma', this.filteredProducts);
       });
  }
  async segmentChanged(event: CustomEvent) {
    this.valueSelectedSegment = parseInt(event.detail.value, 10);
    this.filteredProducts = await this.filterData(this.initialProducts);
    console.log('filtered data with button: ', this.filteredProducts);
    return this.filteredProducts;
  }

  filterData(data){
      return data.filter((producto) => this.valueSelectedSegment === producto.plataforma );
  }
  cotizacion(){
    this.router.navigate(['cotizacion']);
  }
}
