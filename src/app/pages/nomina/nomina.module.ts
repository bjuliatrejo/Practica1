import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominaRoutingModule } from './nomina-routing.module';
import { NominaComponent } from './nomina.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { NavbarnominaComponent } from './components/navbarnomina/navbarnomina.component';


@NgModule({
  declarations: [
    NominaComponent,
    TablasComponent,
    GraficosComponent,
    NavbarnominaComponent
  ],
  imports: [
    CommonModule,
    NominaRoutingModule
  ]
})
export class NominaModule { }
