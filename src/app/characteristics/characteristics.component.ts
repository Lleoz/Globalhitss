import { Component, Input, OnInit } from '@angular/core';
import { Offers, Characteristic } from '../modelos/ofertas.model';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  constructor() { }
  @Input() idOffer: string;
  @Input() ofertas: Offers[];

  caracteristicas: Characteristic[] = [];

  ngOnInit(): void {
  }

  ngOnChanges(){
    if( this.ofertas.length > 0) {
      this.caracteristicas = this.ofertas.filter( f => f.id === this.idOffer)[0].characteristics;
    }
  }
}
