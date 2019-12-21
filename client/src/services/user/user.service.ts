import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user';
import { Pet } from '../../models/pet';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:5000/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addPet = (petData) => {
    // console.log(petData);
    return this.http.post<User>(`${this.url}/add-pet`, petData);
  }

  treatPet = (id) => {
    const petData = { petId: id };
    return this.http.post<Pet>(`${this.url}/treat-pet`, petData);
  }

  me = () => {
    return this.http.get<User>(`${this.url}/me`);
  }

  all = () => {
    return this.http.get<User[]>(`${this.url}/`);
  }

}
