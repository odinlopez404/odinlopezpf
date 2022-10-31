import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private baseURL = 'http://localhost:8080/api/v1/proyectos';
  constructor(private httpClient: HttpClient) {}

  getProyectosList(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(`${this.baseURL}`);
  }

  createProyecto(proyecto: Proyecto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, proyecto);
  }

  getProyectoById(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(`${this.baseURL}/${id}`);
  }

  updateProyecto(id: number, proyecto: Proyecto): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, proyecto);
  }

  deleteProyecto(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
