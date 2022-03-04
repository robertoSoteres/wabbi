import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeResponse } from '../model/home-response.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly http: HttpClient) { }

  getStarWarsPeople( url:string = `https://swapi.dev/api/people/`): Observable<HomeResponse> {
    return this.http
        .get<HomeResponse>(url);
  }

}
