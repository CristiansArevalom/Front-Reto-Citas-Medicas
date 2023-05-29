import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPaciente } from 'src/app/modelos/paciente.model';
import { PacienteService } from 'src/servicios/paciente.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent {
  id:string ='';
  fgValidador : FormGroup= this.fb.group({
    'id':['',[Validators.required]],
    'nombres':['',[Validators.required]],
    'apellidos':['', [Validators.required]],
    'cedula':['',[Validators.required]],
    'edad':['',[Validators.required]],
    'telefono':['',[Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioPaciente : PacienteService,
    private router: Router,
    private route:ActivatedRoute
    ){    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarPaciente();
  }

  BuscarPaciente(){
    this.servicioPaciente.ObtenerPacientePorId(this.id).subscribe((datos:ModeloPaciente)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombre);
      this.fgValidador.controls["apellidos"].setValue(datos.apellido);
      this.fgValidador.controls["cedula"].setValue(datos.cedula);
      this.fgValidador.controls["edad"].setValue(datos.edad);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
    })
  }
  EditarPaciente(){
    //buscando el rpoducto

    let nombres= this.fgValidador.controls["nombres"].value;
    let apellidos= this.fgValidador.controls["apellidos"].value;
    let cedula= this.fgValidador.controls["cedula"].value;
    let edad= this.fgValidador.controls["edad"].value;
    let telefono = this.fgValidador.controls["telefono"].value
    let paciente= new ModeloPaciente(); // creando el paciente para enviar al bknd
    paciente.nombre=nombres;
    paciente.apellido=apellidos;
    paciente.cedula=cedula;
    paciente.edad=edad;
    paciente.telefono=telefono;
    paciente.id=parseInt(this.id);

    this.servicioPaciente.ActualizarPaciente(paciente).subscribe((datos:ModeloPaciente)=>{
      alert("Paciente actualizado correctamente");
      this.router.navigate(["/administracion/pacientes"])
    },(error:any)=>{
      alert("Error actualizando el paciente");
    })

  }

}
