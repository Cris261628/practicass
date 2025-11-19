//CON FIREBASE REALTIME DATABASE
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class Personajes {
  private apiUrl = 'https://prueba1ionicangular-default-rtdb.firebaseio.com/data';


  constructor(private http: HttpClient, private firestore: Firestore) { }


  getDatos(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(`${this.apiUrl}.json`);
  }


  getPersonajePorId(index: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.apiUrl}/${index}.json`);
  }

  getPersonajes() {
    const personajesRef = collection(this.firestore, 'personajes');
    return collectionData(personajesRef, { idField: 'id' });
  }
  getPersonajesDetalle(id: string) {

    const personajeRef = doc(this.firestore, `personajes/${id}`);

    return docData(personajeRef);
  }
}
