import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})

export class ListasPage implements OnInit {
  public miLista = {};
  public miProductList = [];
  public bdCategories = [];
  constructor(private http: HttpClient, private router: Router, public toastController: ToastController) { }

  async presentToast(msg, type) {
    const toast = await this.toastController.create({
      position: 'top',
      color: type,
      message: msg,
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
    this.getCategories();
    this.getListName();

  }
  getListName() {
    this.http.get<any>('http://localhost:4000/lista/milista').subscribe((res) => {
      console.log(res.rows[0]);
      this.miLista = res.rows[0];
      console.log('lista array', this.miLista);
    },
    err => {
      console.error('ha surgido un error', err);
    });
  }

  getCategories() {
    this.http.get<any>('http://localhost:4000/lista/getCategories').subscribe((res) => {
      console.log(res.rows);
      this.bdCategories = res.rows;
      console.log('categorias', this.bdCategories);
    },
    err => {
      console.error('ha surgido un error', err);
    });
  }
  saveProductSelected(categorieId, event) {
    const { checked } = event.srcElement;
    if (!categorieId && !checked) {
      console.log('no se ha seleccionado ningun producto');
      return;
    }
    console.log(categorieId, checked);
    if (!checked) {
      this.miProductList = this.miProductList.filter((idProduct) => idProduct !== categorieId);
      return;
    }
    this.miProductList.push(categorieId);
    console.log('array actual: ', this.miProductList);
  }

  async saveListContent(myListaId) {
    if (this.miProductList.length > 0) {
      const data = {
        userId: myListaId,
        products: this.miProductList,
       };
      this.http.post<any>('http://localhost:4000/lista/lista/contentList', data).subscribe((res) => {
      this.router.navigate(['products']);
    },
    err => {
        console.error('ha surgido un error', err);
    });
    } else {
      await this.presentToast('No se ha seleccionado ninguna categoria', 'warning');
    }
  }
}
