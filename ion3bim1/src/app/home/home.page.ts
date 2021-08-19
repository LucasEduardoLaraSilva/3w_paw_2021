import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

num1 = null;
num2 = null;
resposta = null;

  constructor() {}

  calcular() void{
    this.resposta = this.num1 + this.num2;
  }

}
