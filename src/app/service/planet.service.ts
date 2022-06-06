import { Planet } from './../models/planet.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http:HttpClient) { }

  getPlanet(page: number): Observable<any> {
    return this.http.get<Planet>(`https://swapi.dev/api/planets/?page=${page}`);
}

}
