import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pet } from '../../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url = 'http://localhost:5000/pets';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  all = () => {
    return this.http.get<Pet[]>(`${this.url}/`);
  }

}
