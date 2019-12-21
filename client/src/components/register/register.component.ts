import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = {
    email: null,
    email2: null,
    password: null,
    password2: null,
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register = () => {
    this.authService.register(this.registerData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/login']);
        },
        err => console.error(err)
      );
  }

}
