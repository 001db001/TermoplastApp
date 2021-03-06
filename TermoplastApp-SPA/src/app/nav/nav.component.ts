import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    return this.authService.loggedin();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Odjavljeni ste');
    this.router.navigate(['/login']);
  }


}
