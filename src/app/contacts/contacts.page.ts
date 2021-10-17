import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProveedorService } from './proveedor.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  proveedores = [
  ];
  constructor(private http: HttpClient, private proveedorService: ProveedorService) {}

  ngOnInit() {
    this.proveedores = this.proveedorService.getProveedores();
  }

  // por lo pronto no lo ocupo
    // this.http.get<any>('https://herojsapi.herokuapp.com/colaboradorcontroller.php')
    //   .subscribe(res => {
    //     this.contacts = res.colaboradores;
    //     console.log(this.contacts);
    //   });
}
