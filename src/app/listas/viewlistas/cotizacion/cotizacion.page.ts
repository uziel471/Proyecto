import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.page.html',
  styleUrls: ['./cotizacion.page.scss'],
})
export class CotizacionPage implements OnInit {
  initialList = [];
  constructor(private activedRouter: ActivatedRoute, private http: HttpClient ) { }
  ngOnInit() {
    const id = this.activedRouter.snapshot.paramMap.get('idcotizacion');
    this.getProducts(id);
  }

  getProducts(id) {
    this.http.get<any>('localhost:4000/cotizar/getcotizacion/' + id)
    .subscribe((res) => {
      console.log(res);
      // this.initialList = res;
    });
  }

}
