import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  valor: number = 0;
  ValCambio: number = 0;
  unidade: string = 'R$';
  unidadeDe: string = 'US$';
  unidadePara: string = '£';
  resultado: number = 0;;

  constructor() {
    this.valor = 0;
    this.resultado = 0;
    this.ValCambio = 0;
  }


  converter(valor: number, unidadeDe: string, unidadePara: string, ValCambio: number) {
    if (unidadeDe === 'R$' && unidadePara === 'US$') {
      return valor * ValCambio;
    } else if (unidadeDe === 'US$' && unidadePara === 'R$') {
      return valor * ValCambio;
    } else if (unidadeDe === 'R$' && unidadePara === '£') {
      return valor * ValCambio;
    } else if (unidadeDe === '£' && unidadePara === 'R$') {
      return valor * ValCambio;
    } else if (unidadeDe === 'US$' && unidadePara === '£') {
      return valor * ValCambio;
    } else if (unidadeDe === '£' && unidadePara === 'US$') {
      return valor * ValCambio;
    } else {
      return valor;
    }
  }
}
