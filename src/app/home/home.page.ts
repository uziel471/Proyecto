import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

//  session = "xd"

  constructor(public router:Router) {}

  ionViewWillEnter(){
    this.login();  
  }

  login(){
    console.log('Comprobando');
//    window.localStorage.setItem('sessin', this.session);

    if(!window.localStorage.getItem('@session')){
      this.redirectOther();
      console.log('no esta')
    }
  }

  redirectOther(){
    this.router.navigateByUrl('/login')
  }

}
