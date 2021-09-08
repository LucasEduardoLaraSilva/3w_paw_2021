import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  gasolina  = undefined;
  etanol    = undefined;
  resposta  = undefined;

 combustivel = [
   'gasolina.jpg',
   'etanol.jpg',
   'dois.jpg'
 ]
 inicio = 'inicio.png';
  
  constructor() {}

  trocarCombustivel(indice: number):void{
    this.inicio = this.combustivel[indice];
  }

  verificar():void{
    let diferenca = this.etanol / this.gasolina;

    if(diferenca > 0.7){
      this.inicio = this.combustivel[0];
      this.resposta = 'gasolina';
    }else if(diferenca < 0.7){
      this.inicio = this.combustivel[1];
      this.resposta = 'etanol';
    }else{
      this.inicio = this.combustivel[2];
      this.resposta = 'Tanto faz';
    }
  }

}