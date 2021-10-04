import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: any[] = [];
  respuesta: any[] = [];

  constructor(private http: HttpClient) { 
    this.cargarHeroes();
  }

  cargarHeroes() {
    return this.http
    .get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe( (respuesta : any) => {
        this.heroes = respuesta;
        console.log(this.heroes)
      });
    }
  }
