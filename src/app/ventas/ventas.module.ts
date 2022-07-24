import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos de terceros
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

// Modulos propios

//Componentes propios
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [
    BasicosComponent,
    ColorPipe,
    MayusculasPipe,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    VuelaPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports:[
    BasicosComponent,
    ColorPipe,
    MayusculasPipe,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    VuelaPipe
  ]
})
export class VentasModule { }
