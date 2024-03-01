import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroe.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseURL: string = environments.baseURL;

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`);
  }
}
