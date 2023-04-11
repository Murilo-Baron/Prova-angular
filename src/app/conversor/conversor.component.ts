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
    this.resultado = this.valor * 0o507;
  } else if (this.unidadeDe === '£' && this.unidadePara === 'US$') {
    this.resultado = this.valor / 0o0032;
  } else if (this.unidadeDe === 'US$' && this.unidadePara === '£') {
    this.resultado = this.valor / 0o0032;
  } else if (this.unidadeDe === 'R$' && this.unidadePara === '£') {
    this.resultado = this.valor * 0o507;
  } else {
    this.resultado = this.valor;
  }
}
}
