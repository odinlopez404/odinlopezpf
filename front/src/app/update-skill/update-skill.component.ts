import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../model/skill.model';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {
  id!: number;
  skill: Skill = new Skill();
  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.skillService.getSkillById(this.id).subscribe(
      (data) => {
        this.skill = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.skillService.updateSkill(this.id, this.skill).subscribe(
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
