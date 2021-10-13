import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cuadernos = [
    {
      id: 1,
      descripcion: 'Raya',
      precio: 243,
      marca:'Mead',
      image: 'cuaderno.jpg',
      rank:5
    },
    {
      id: 2,
      descripcion: 'cuadro',
      precio: 223,
      marca:'Mead',
      image: 'cuaderno.jpg',
      rank:5
    }

  ]
  constructor() {}

}
