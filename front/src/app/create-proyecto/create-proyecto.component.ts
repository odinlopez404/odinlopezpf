import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../model/proyecto.model';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-create-proyecto',
  templateUrl: './create-proyecto.component.html',
  styleUrls: ['./create-proyecto.component.css']
})
export class CreateProyectoComponent implements OnInit {
  proyecto: Proyecto = new Proyecto();
  constructor(private proyectoService: ProyectoService, 
    private router: Router ) { }

    ngOnInit(): void {}

    saveProyecto() {
      this.proyectoService.createProyecto(this.proyecto).subscribe(data =>{
        console.log(data);
        this.goToHome();
      },
        error => console.log(error));
    }
  
    goToHome() {
      this.router.navigate(['/']);
    }
  
    onSubmit() {
      console.log(this.proyecto);
      this.saveProyecto();
    }
  
  }
  