import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email: string;
  password: string;
  constructor(private http: HttpClient, private router: Router) { }
  login() {
    const correo = 'uziel471@gmail.com';
    const gg = 'uziel471';
    this.http.get<any>('http://localhost:4000/login/login/' + correo + '/' + gg).subscribe((res) => {
      console.log('login',res);
    },
    err => {
        console.error('ha surgido un error', err);
    });
  }

}
