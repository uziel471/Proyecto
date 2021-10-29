import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cuadernos = [
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:4000/notebook')
       .subscribe(res => {
         this.cuadernos = res;
         console.log(this.cuadernos);
       });
       console.log('api');
  }


}
