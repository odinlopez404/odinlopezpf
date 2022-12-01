import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../model/skill.model';
import { SkillService } from '../service/skill.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [];
  isLogged = false;
  constructor(
    private skillService: SkillService,
    private router: Router,
    private tokenService: TokenService

  ) { }

  ngOnInit(): void {
    this.getSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else { this.isLogged=false;}
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
