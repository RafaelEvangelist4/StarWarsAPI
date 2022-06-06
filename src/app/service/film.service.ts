import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Films } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getFilms(page: number): Observable<any>{
    return this.http.get<Films>(`https://swapi.dev/api/films/?page=${page}`)
  }
}
