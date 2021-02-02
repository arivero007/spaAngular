import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private service:HeroesService) { }

  ngOnInit(): void {

  }

  buscarHeroe(textoBusqueda: string){

    this.router.navigate(['/hero-search', textoBusqueda])

  }
}
