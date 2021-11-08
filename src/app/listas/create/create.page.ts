import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Type } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage{

  nombre: string;
  constructor(private http: HttpClient) { }
  createdList() {
    const postData = {
      namePerson: this.nombre,
      usuarioId: 1
    };
    this.http.post('http://localhost:4000/lista/lista/create', postData).subscribe((res: any) => {
      console.log(res);
    });
  }

}
