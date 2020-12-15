import { Component, Input, OnInit, Output } from '@angular/core';
import { Offers } from '../modelos/ofertas.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  @Input() ofertas: Offers[];
  @Output() idOffer: EventEmitter<string> = new EventEmitter();
  idOferta: string = '';
  nombreOferta: string = '';

  constructor( ) { }

  ngOnInit(): void {
  }

  change( value: string){
    this.idOferta = value;
    this.nombreOferta = this.ofertas.filter(f => f.id === value)[0].name;
    this.idOffer.emit(value);
  }

}
