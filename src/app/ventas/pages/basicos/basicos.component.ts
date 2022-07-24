import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'nombre'
  nombreUpper: string = 'NOMBRE'
  nombreCompleto: string = 'noMbre CompLeTo'

  fecha : Date = new Date()

  constructor() { }




}
