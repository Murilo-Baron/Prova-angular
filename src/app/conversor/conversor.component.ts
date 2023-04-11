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

  converter(valor: number, unidadeDe: string, unidadePara: string) {
    if (unidadeDe === 'R$' && unidadePara === 'US$') {
      return valor * 0.19;
    } else if (unidadeDe === 'US$' && unidadePara === 'R$') {
      return valor * 5.30;
    } else if (unidadeDe === 'R$' && unidadePara === '£') {
      return valor * 0.025;
    } else if (unidadeDe === '£' && unidadePara === 'R$') {
      return valor * 39.73;
    } else if (unidadeDe === 'US$' && unidadePara === '£') {
      return valor * 0.72;
    } else if (unidadeDe === '£' && unidadePara === 'US$') {
      return valor * 1.39;
    } else {
      return valor;
    }
  }
}
