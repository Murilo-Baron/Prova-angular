import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  valor: number = 0;
  unidade: string = 'R$';
  unidadeDe: string = 'US$';
  unidadePara: string = '£';
  resultado: number = 0;;

  constructor() {
    this.valor = 0; // Inicializa a variável novamente com o valor 0 no construtor
    this.resultado = 0; // Inicializa a variável novamente com o valor 0 no construtor
  }

  converter() {
    if (this.unidadeDe === 'R$' && this.unidadePara === 'US$') {
      this.resultado = this.valor * 5,07;
    } else if (this.unidadeDe === '£' && this.unidadePara === 'US$') {
      this.resultado = this.valor / 0,032;
    } else if (this.unidadeDe === 'R$' && this.unidadePara === '£') {
      this.resultado = this.valor * 0,16;
    } else if (this.unidadeDe === 'lb' && this.unidadePara === 'kg') {
      this.resultado = this.valor / 2.20462;
    } else if (this.unidadeDe === 'g' && this.unidadePara === 'lb') {
      this.resultado = this.valor * 0.00220462;
    } else if (this.unidadeDe === 'lb' && this.unidadePara === 'g') {
      this.resultado = this.valor / 0.00220462;
    } else {
      this.resultado = this.valor;
    }
  }
}
