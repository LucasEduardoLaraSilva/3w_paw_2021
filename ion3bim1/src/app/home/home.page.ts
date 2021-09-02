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

  carros = [
    ('assets/img/carro1.jpg'),
    'boi',
    'joão'
  ]

  calculoCom = this.etanol / this.gasolina;
  src: string;

 verificar(): void{
   let diferenca = this.etanol / this.gasolina;

   if(diferenca > 0.7){
     this.resposta = 'GASOLINA' + this.carros[0];
   }else if(diferenca < 0.7){
     this.resposta = 'ETANOL'[1];
   }else{
     this.resposta = 'TANTO FAZ...';
   }
 }

  carro = 'inicio.jpg';
  
  constructor() {}

  //criação de métodos
  trocarCarro(indice:number): void{
    this.carro = this.carros[indice];
  }

}