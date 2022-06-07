import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specie } from '../models/specie.model';
@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecies(page: number): Observable<any> {
    return this.http.get<Specie>(`https://swapi.dev/api/species/?page=${page}`);
}
}