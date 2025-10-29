import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Personajes {
  private apiUrl = 'https://trabajo26-c282c-default-rtdb.firebaseio.com/data';

  constructor(private http: HttpClient) { }


  getDatos(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.apiUrl}.json`);
  }


  getPersonajePorId(index: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/${index}.json`);
  }
}


/*import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RespuestaBD, RespuestaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class Personajes {

  constructor(private http: HttpClient){ }
  
  getDatos(){
    return this.http.get<RespuestaBD>('https://reqres.in/api/users',
      {headers:{'x-api-key':'reqres-free-v1'}});
}

getPersonajePorId(id: number) {
    return this.http.get<RespuestaDetalle>(`https://reqres.in/api/users/${id}`, {
      headers: { 'x-api-key': 'reqres-free-v1' }
    });
  }

  
}*/
