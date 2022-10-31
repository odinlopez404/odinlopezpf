import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from '../model/education.model';
import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];
  constructor(
    private educationService: EducationService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getEducations();
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
