import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewlistas',
  templateUrl: './viewlistas.page.html',
  styleUrls: ['./viewlistas.page.scss'],
})
export class ViewlistasPage implements OnInit {
  initialList = [];
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.loadList();
  }
  loadList(){
    const session = JSON.parse(window.localStorage.getItem('@session'));
    const usuarioId = session[0].id;

    this.http.get<any>('http://localhost:4000/lista/getListas/' + usuarioId)
    .subscribe((res) => {
      this.initialList = res;
    });
  }

  newList(){
    this.router.navigate(['/listas/create']);
  }
}
