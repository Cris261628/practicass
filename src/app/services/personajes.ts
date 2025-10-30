import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Firestore ,collection,collectionData,doc,docData} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Personajes {
  private apiUrl = 'https://trabajo26-c282c-default-rtdb.firebaseio.com/data';

  constructor (private http = HttpClient,
    private firestore:Firestore
  ) { }


  getDatos(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.apiUrl}.json`);
  }


  getPersonajePorId(index: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/${index}.json`);
  }
  getPersonajes(){
    const personajesRef=collection(this.firestore,'personajes');
    return collectionData(personajesRef,{idField:'id'});
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
