import { Component, Input, OnInit } from '@angular/core';
import { Offers, ProductOfferingPrice } from '../modelos/ofertas.model';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  @Input() idOffer: string;
  @Input() ofertas: Offers[];
  precios: ProductOfferingPrice[] = [];
  listaPrecios = []; 

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if( this.ofertas.length > 0) {
      this.precios = this.ofertas.filter( f => f.id === this.idOffer)[0].productOfferingPrices;
    }
  }

}
