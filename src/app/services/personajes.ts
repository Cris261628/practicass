import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaBD, RespuestaDetalle } from '../interfaces/interfaces';
import { environment } from '../../environments/environment'; // 👈 importa esto

@Injectable({
  providedIn: 'root'
})
export class Personajes {

  private baseUrl = environment.apiUrl; // 👈 URL base configurable

  constructor(private http: HttpClient) {}

  getDatos() {
    return this.http.get<RespuestaBD>(`${this.baseUrl}/users.json`, {
      headers: { 'x-api-key': 'reqres-free-v1' }
    });
  }

  getPersonajePorId(id: number) {
    return this.http.get<RespuestaDetalle>(`${this.baseUrl}/users/${id}.json`, {
      headers: { 'x-api-key': 'reqres-free-v1' }
    });
  }
}
