import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private baseURL = 'http://localhost:8080/api/v1/skills';
  constructor(private httpClient: HttpClient) {}

  getSkillsList(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.baseURL}`);
  }

  createSkill(skill: Skill): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, skill);
  }

  getSkillById(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(`${this.baseURL}/${id}`);
  }

  updateSkill(id: number, skill: Skill): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, skill);
  }

  deleteSkill(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
