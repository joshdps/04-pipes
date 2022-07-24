import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  //i18nPlural
  clientes: any[] = [
    [
      'Valeria', 'femenino'
    ]
    ,
    [
      'Nina', 'femenino'
    ],
    [
      'Josh', 'masculino'
    ],
    [
      'Fabian', 'masculino'
    ]
  ];

  clientesMapping:
    { [k: string]: string } = {
      '=0': 'no hay clientes',
      '=1': 'hay un cliente.',
      'other': 'hay # clientes'
    };

  //i18nSelect
  i: number = 0
  nombre: string = this.clientes[this.i][0];
  genero: string = this.clientes[this.i][1];

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  cambiarCliente() {
    if (this.i + 1 < this.clientes.length) {
      this.i++;

    } else {
      this.i = 0;
    }
    this.nombre = this.clientes[this.i][0]
    this.genero = this.clientes[this.i][1]


  }

  borrarCliente() {
    this.clientes.pop()
  }

  // KeyValuePipe
  persona = {
    nombre: 'Nombre',
    edad: 36,
    direccion: 'Stgo'
  }

  // JSON Pipe

  heroe = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'aquaman',
      vuela: false
    }
  ]

  miObservable = interval(1000);
  miPromesa = new Promise( ( resolve, reject ) => {
   setTimeout(()=>{
    resolve('Tenemos data de la prome')
   },3500)
  })
}
