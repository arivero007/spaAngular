import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:Heroe

  constructor(private activatedRoute:ActivatedRoute, private service:HeroesService) {

    this.activatedRoute.params.subscribe(params=>{
      this.heroe = this.service.getHeroe(params['id']);
      console.log(this.heroe);
    });

   }

  ngOnInit(): void {
    
  }

  getWorld(): string{
    if (this.heroe.casa == "DC"){
      return "assets/img/dc.png"
    }else{
      return "assets/img/marvel.png"
    }
  }

}
