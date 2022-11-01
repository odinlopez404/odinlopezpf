import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../model/skill.model';
import { SkillService } from '../service/skill.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [];
  constructor(
    private skillService: SkillService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getSkills();
  }

  private getSkills() {
    this.skillService.getSkillsList().subscribe((data) => {
      this.skills = data;
    });
  }

  updateSkill(id: number) {
    this.router.navigate(['update-skill', id]);
  }

  deleteSkill(id: number) {
    this.skillService.deleteSkill(id).subscribe((data) => {
      console.log(data);
      this.getSkills();
    });
  }

}
