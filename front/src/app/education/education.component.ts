import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from '../model/education.model';
import { EducationService } from '../service/education.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];
  isLogged = false;
  constructor(
    private educationService: EducationService,
    private router: Router,
    private tokenService: TokenService

  ) { }

  ngOnInit(): void {
    this.getEducations();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else { this.isLogged=false;}
  }

  private getEducations() {
    this.educationService.getEducationsList().subscribe((data) => {
      this.educations = data;
    });
  }

  updateEducation(id: number) {
    this.router.navigate(['update-education', id]);
  }

  deleteEducation(id: number) {
    this.educationService.deleteEducation(id).subscribe((data) => {
      console.log(data);
      this.getEducations();
    });
  }

}
