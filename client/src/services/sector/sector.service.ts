import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Sector } from '../../models/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private url = 'http://localhost:5000/sectors';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSector = (id) => {
    return this.http.get<Sector>(`${this.url}/${id}`);
  }

}
