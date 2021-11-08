import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})

export class ListasPage implements OnInit {
  public miLista = {};
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<any>('http://localhost:4000/lista/milista').subscribe((res) => {
      console.log(res.rows[0]);
      this.miLista = res.rows[0];
      console.log('lista array', this.miLista);
  },
  err => {
      console.error('ha surgido un error', err);
  });
  }

}
