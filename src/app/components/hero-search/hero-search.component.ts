import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html'
})

export class HeroSearchComponent implements OnInit {

  results: Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute, private service:HeroesService, private router: Router) { 
    this.activatedRoute.params.subscribe(params=>{
      this.results = this.service.buscarHeroes(params['textSearch']);
    });
  }

  ngOnInit(): void {

  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx])
  }

}
