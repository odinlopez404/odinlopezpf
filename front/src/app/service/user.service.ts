import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:8080/api/v1/user';
  constructor(private httpClient: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }
  
}
