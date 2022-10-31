import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../model/proyecto.model';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit {
  id!: number;
  proyecto: Proyecto = new Proyecto();
  constructor(
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.proyectoService.getProyectoById(this.id).subscribe(
      (data) => {
        this.proyecto = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.proyectoService.updateProyecto(this.id, this.proyecto).subscribe(
      (data) => {
        this.goToHome();
      },
      (error) => console.log(error)
    );
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
