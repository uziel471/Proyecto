import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts = [
  ];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any>('https://herojsapi.herokuapp.com/colaboradorcontroller.php')
      .subscribe(res => {
        this.contacts = res.colaboradores;
        console.log(this.contacts);
      });
  }

}
