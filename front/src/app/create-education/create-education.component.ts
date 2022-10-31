import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from '../model/education.model';
import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent implements OnInit {
  education: Education = new Education();

  constructor(private educationService: EducationService,
    private router: Router) {}

  ngOnInit(): void {}

  saveEducation() {
    this.educationService.createEducation(this.education).subscribe(data =>{
      console.log(data);
      this.goToHome();
    },
      error => console.log(error));
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.education);
    this.saveEducation();
  }

}
