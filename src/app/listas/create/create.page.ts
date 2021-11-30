import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage{

  nombre: string;
  constructor(private http: HttpClient, private router: Router) { }
  createdList() {
    const postData = {
      namePerson: this.nombre,
      usuarioId: 1
    };
    this.http.post<any>('http://localhost:4000/lista/lista/create', postData).subscribe((res) => {
      this.router.navigate(['listas']);
    },
    err => {
        console.error('ha surgido un error', err);
    });
  }
}
