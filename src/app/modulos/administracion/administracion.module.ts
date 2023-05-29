import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from './pacientes/editar-paciente/editar-paciente.component';
import { EliminarPacienteComponent } from './pacientes/eliminar-paciente/eliminar-paciente.component';
import { BuscarPacienteComponent } from './pacientes/buscar-paciente/buscar-paciente.component';
import { CrearDoctorComponent } from './doctores/crear-doctor/crear-doctor.component';
import { EditarDoctorComponent } from './doctores/editar-doctor/editar-doctor.component';
import { EliminarDoctorComponent } from './doctores/eliminar-doctor/eliminar-doctor.component';
import { BuscarDoctorComponent } from './doctores/buscar-doctor/buscar-doctor.component';
import { BuscarEspecialidadComponent } from './especialidades/buscar-especialidad/buscar-especialidad.component';


@NgModule({
  declarations: [
    CrearPacienteComponent,
    EditarPacienteComponent,
    EliminarPacienteComponent,
    BuscarPacienteComponent,
    CrearDoctorComponent,
    EditarDoctorComponent,
    EliminarDoctorComponent,
    BuscarDoctorComponent,
    BuscarEspecialidadComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
