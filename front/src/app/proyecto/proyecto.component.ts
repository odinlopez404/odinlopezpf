import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../model/proyecto.model';
import { ProyectoService } from '../service/proyecto.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  isLogged = false;
  proyectos: Proyecto[] = [];
  constructor(
    private proyectoService: ProyectoService,
    private router: Router,
    private tokenService: TokenService

  ) { }

  ngOnInit(): void {
    this.getProyectos();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else { this.isLogged=false;}
  }

  private getProyectos() {
    this.proyectoService.getProyectosList().subscribe((data) => {
      this.proyectos = data;
    });
  }

  updateProyecto(id: number) {
    this.router.navigate(['update-proyecto', id]);
  }

  deleteProyecto(id: number) {
    this.proyectoService.deleteProyecto(id).subscribe((data) => {
      console.log(data);
      this.getProyectos();
    });
  }



}

