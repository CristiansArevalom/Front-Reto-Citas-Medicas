import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDoctorComponent } from './doctores/crear-doctor/crear-doctor.component';
import { EditarDoctorComponent } from './doctores/editar-doctor/editar-doctor.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from './pacientes/editar-paciente/editar-paciente.component';
import { BuscarPacienteComponent } from './pacientes/buscar-paciente/buscar-paciente.component';
import { EliminarPacienteComponent } from './pacientes/eliminar-paciente/eliminar-paciente.component';

const routes: Routes = [
{
  path: 'crear-doctores',
  component:CrearDoctorComponent
},

{
  path: 'editar-doctores',
  component:EditarDoctorComponent
},
{
  path: 'pacientes',
  component:BuscarPacienteComponent
},
{
  path: 'crear-paciente',
  component:CrearPacienteComponent
},

{
  path: 'paciente/:id',
  component:EditarPacienteComponent
},
{
  path: 'paciente/:id',
  component:EliminarPacienteComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
