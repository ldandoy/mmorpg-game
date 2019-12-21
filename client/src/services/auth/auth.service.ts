import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:5000';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) { }

  auth = (user) => {
    return this.http.post<any>(`${this.url}/login`, user);
  }

  register = (user) => {
    return this.http.post<any>(`${this.url}/register`, user);
  }

  loggedIn = () => {
    return !!localStorage.getItem('token');
  }

  logout = () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken = () => {
    return localStorage.getItem('token');
  }
}
