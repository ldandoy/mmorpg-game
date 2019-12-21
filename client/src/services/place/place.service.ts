import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Place } from '../../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private url = `http://localhost:5000`;  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPlace = (placeId) => {
    return this.http.get<Place>(`${this.url}/places/${placeId}`);
  }

}
