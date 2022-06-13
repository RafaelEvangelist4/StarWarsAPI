import { People } from './../models/people.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  
  private baseUrl = 'https://swapi.dev/api/people/';
  constructor(private http: HttpClient) { }
  

getAllCharacter(): Observable<any> {
  return this.getResults(`${this.baseUrl}?format=json`).pipe(
    map((data: any) => {
      console.log(data.results);
      return data.results
    }));
}
getResults(url: string): Observable<any> {

  return new Observable((observer: any) => {

    let request = new XMLHttpRequest();

    request.open('GET', url);

    request.onload = () => {
      if (request.status === 200) {
        observer.next(JSON.parse(request.response));
        observer.complete();
      } else {
        observer.error(new Error(request.statusText));
      }
    }

    request.onerror = () => {
      observer.error(new Error('Unknown error'));
    }

    request.send();
  });

}

getDetailCharacter(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}${id}?format=json`);
}
}
