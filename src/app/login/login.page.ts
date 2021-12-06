import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const session = JSON.parse(window.localStorage.getItem('@session'));
    if(session){
      this.router.navigate(['viewlistas']);
    }
  }
  login() {
    const email = this.email;
    const password = this.password;
    console.log(email);
    console.log(password);
    this.http.get<any>('http://localhost:4000/login/login/' + email + '/' + password).subscribe((res) => {
      if(res[0].correo && res[0].password){
        const local = window.localStorage;
        local.setItem('@session', JSON.stringify(res));
        this.router.navigate(['viewlistas']);
      }
    },
    err => {
      console.error('ha surgido un error', err);
    });
  }

}
