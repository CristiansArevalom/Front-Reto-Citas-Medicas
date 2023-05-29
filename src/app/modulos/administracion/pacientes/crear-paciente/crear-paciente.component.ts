import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPaciente } from 'src/app/modelos/paciente.model';
import { PacienteService } from 'src/servicios/paciente.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
 
  fgValidador : FormGroup= this.fb.group({
    'nombres':['',[Validators.required]],
    'apellidos':['', [Validators.required]],
    'cedula':['',[Validators.required]],
    'edad':['',[Validators.required]],
    'telefono':['',[Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioPaciente : PacienteService,
    private router: Router
    ){    
  }

  ngOnInit(): void {
   
  }
  GuardarPaciente(){
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

    this.servicioPaciente.CrearPaciente(paciente).subscribe((datos:ModeloPaciente)=>{
      alert("Paciente guardado correctamente");
      this.router.navigate(["/administracion/pacientes"])
    },(error:any)=>{
      alert("Error almacenando el paciente");
    })

  }



}
