import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../model/education.model';
import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {
  id!: number;
  education: Education = new Education();
  constructor(
    private educationService: EducationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.educationService.getEducationById(this.id).subscribe(
      (data) => {
        this.education = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.educationService.updateEducation(this.id, this.education).subscribe(
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
