import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interface/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Heroe[] = [];
  respuesta: any[] = [];

  constructor(private http: HttpClient) { 
    this.cargarHeroes();
  }

  async detalleHeroe(id : string){
    return await this.http
    .get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
  }

  async cargarHeroes() {
    return await this.http
    .get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe( (respuesta: any) => {
        this.heroes = respuesta;
        // console.log(this.heroes)
      });
    }
  }
