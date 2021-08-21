import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gasolina  = null;
  etanol    = null;
  resposta  = null;

  calculoCom = this.etanol / this.gasolina;

  calcular(): void{
   if(this.calculoCom < 0,7){
     this.resposta = 'Etanol';
   }
   if(this.calculoCom > 0,7){
     this.resposta = 'Gasolina';
   }
  }
  
  constructor() {}

}