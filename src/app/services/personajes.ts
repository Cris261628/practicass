import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaBD } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class Personajes {
  constructor(private http: HttpClient) { }
  getDatos() {
    return this.http.get<RespuestaBD>('https://reqres.in/api/users',{headers:{'x-api-key':'reqres-free-v1'}});
  }
}
