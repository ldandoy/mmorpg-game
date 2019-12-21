import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PetsCategoriesService {

  private url = 'http://localhost:5000/pets-caterories';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  all = () => {
    return this.http.get<any>(`${this.url}/`);
  }

}
