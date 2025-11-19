import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Personajes } from './personajes';
import { Firestore } from '@angular/fire/firestore';

describe('Personajes Service', () => {
  let service: Personajes;


  const firestoreMock = {
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        Personajes,
        { provide: Firestore, useValue: firestoreMock }
      ]
    });

    service = TestBed.inject(Personajes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
