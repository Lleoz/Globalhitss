import { Component, OnInit } from '@angular/core';
import { Offers } from './modelos/ofertas.model';
import { OfertasService } from './services/ofertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebaClaro';

  ofertas: Offers[] = [];
  idOffer: string;
  
  constructor( private _ofertasService: OfertasService ){}

  ngOnInit(): void {
    this._ofertasService.getOffer().subscribe( res => {
      res.forEach(element => {
        this.ofertas.push({
          id: element.versions[0].id,
          name: element.versions[0].name,
          characteristics: element.versions[0].characteristics,
          productOfferingPrices: element.versions[0].productOfferingPrices
        });
      });
    })
  }

  cambiaOferta(event){
    this.idOffer = event;
  }
}
