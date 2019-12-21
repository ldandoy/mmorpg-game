import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authData = {
    email: null,
    password: null
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['choice-pet']);
    }
  }

  auth = () => {
    this.authService.auth(this.authData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/choice-pet']);
        },
        err => console.error(err)
      );
  }

}
