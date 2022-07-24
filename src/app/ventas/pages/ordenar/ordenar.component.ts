import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html'
})
export class OrdenarComponent {
  creador    : string = 'JoSh'
  esMayuscula: boolean = true;
  ordenarPor : string = '';

  cambiarOrden(valor: string){
    this.ordenarPor = valor
  }

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },  
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.verde
    },  
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];
  
  cambiarMayuscula(){
     this.esMayuscula = !this.esMayuscula
  }
  constructor() { }


}
