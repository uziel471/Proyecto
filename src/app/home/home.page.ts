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
      rank:5,
      mas:'+'
    },
    {
      id: 2,
      descripcion: 'Cuadro',
      precio: 223,
      marca:'Mead',
      image: 'cuaderno.jpg',
      rank:5,
      mas:'+'
    },
    {
      id: 3,
      descripcion: 'Dibujo',
      precio: 324,
      marca:'Mead',
      image: 'cuaderno.jpg',
      rank:5,
      mas:'+'
    },
    {
      id: 4,
      descripcion: 'Doble Raya',
      precio: 324,
      marca:'Mead',
      image: 'cuaderno.jpg',
      rank:5,
      mas:'+'
    },
    {
      id: 5,
      descripcion: 'Cuadriculado-milimetrado',
      precio: 344,
      marca:'Mead',
      image: 'cuaderno.jpg',
      rank:5,
      mas:'+'
    }

  ];
  constructor() {}

}
