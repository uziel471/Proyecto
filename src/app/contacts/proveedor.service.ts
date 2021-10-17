import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Proveedor } from './contactdetail/proveedor.model';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private proveedores: Proveedor[] = [
    {
      id: '1',
      nombre: 'Alexander',
      apellidoPaterno: 'Jocobi',
      email: 'alexander.vazquez@g-global.com',
      equipo: 'Gnex',
    },
    {
      id: '2',
      nombre: 'Uziel',
      apellidoPaterno: 'Estrada',
      email: 'uziel.estrada@g-global.com',
      equipo: 'Innovacion',
    },
    {
      id: '3',
      nombre: 'Tercero',
      apellidoPaterno: 'Gomez',
      email: 'tercero.gomez@g-global.com',
      equipo: 'IT',
    },
  ];

  constructor(private http: HttpClient) { }

  getProveedores(){
    return [...this.proveedores];
  }
  getProveedor(id: string){
    return {
      ...this.proveedores.find(proveedor => proveedor.id === id)
    };
  }
  addProveedor(id: string, nombre: string, apellidoPaterno: string, email: string, equipo: string ){
    this.proveedores.push({
      id: this.proveedores.length + 1 + '',
      nombre,
      apellidoPaterno,
      email,
      equipo,
    });
  }
  deleteProveedor(id: string){
    this.proveedores = this.proveedores.filter(proveedor => proveedor.id !== id);
  }
}
