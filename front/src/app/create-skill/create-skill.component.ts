import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../model/skill.model';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {
  skill: Skill = new Skill();

  constructor(private skillService: SkillService,
    private router: Router) {}

  ngOnInit(): void {}

  saveSkill() {
    this.skillService.createSkill(this.skill).subscribe(data =>{
      console.log(data);
      this.goToHome();
    },
      error => console.log(error));
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.skill);
    this.saveSkill();
  }

}
