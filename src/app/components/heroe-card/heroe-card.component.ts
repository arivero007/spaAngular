import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe
  @Input() index: number
  
  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // this.router.navigate(['/heroe', this.index])
    this.heroeSeleccionado.emit(this.index);
  }

}
