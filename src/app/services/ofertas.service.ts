import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ofertas } from '../modelos/ofertas.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  getOffer(): Observable<Ofertas[]>{
    return this.http.get<Ofertas[]>('assets/ofertas.json');
  }
}
