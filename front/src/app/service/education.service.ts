import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private baseURL = 'http://localhost:8080/api/v1/educaciones';
  constructor(private httpClient: HttpClient) {}

  getEducationsList(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(`${this.baseURL}`);
  }

  createEducation(education: Education): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, education);
  }

  getEducationById(id: number): Observable<Education> {
    return this.httpClient.get<Education>(`${this.baseURL}/${id}`);
  }

  updateEducation(id: number, education: Education): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, education);
  }

  deleteEducation(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
