
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    constructor( private _heroesService: HeroesService){
        console.log("Servicio listo para usarse!!!");
    }
}