import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservarConsultorioComponent } from './reservar-consultorio/reservar-consultorio.component';
import { ReservarCitaMedicaComponent } from './reservar-cita-medica/reservar-cita-medica.component';


@NgModule({
  declarations: [
    ReservarConsultorioComponent,
    ReservarCitaMedicaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }
