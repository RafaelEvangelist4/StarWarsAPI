import { People } from './../models/people.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  

  constructor(private http: HttpClient) { }
  
  getPeople(page: number): Observable<any> {
    return this.http.get<People>(`https://swapi.dev/api/people/?page=${page}`);
}
}
