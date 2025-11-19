import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPage } from './inicio.page';
import { Personajes } from 'src/app/services/personajes';
import { of } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { Firestore } from '@angular/fire/firestore';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  const personajesMock = [
    { id: '1', nombre: 'Goku', imagen: 'goku.png' },
    { id: '2', nombre: 'Vegeta', imagen: 'vegeta.png' }
  ];

  const mockPersonajesService = {
    getPersonajes: jasmine.createSpy('getPersonajes').and.returnValue(of(personajesMock))
  };

  const mockModalController = {
    create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
      present: jasmine.createSpy('present')
    }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioPage],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Personajes, useValue: mockPersonajesService },
        { provide: ModalController, useValue: mockModalController },
        { provide: Firestore, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load personajes on init', () => {
    expect(mockPersonajesService.getPersonajes).toHaveBeenCalled();
    expect(component.personajesRecientes.length).toBe(2);
    expect(component.personajesRecientes[0].nombre).toBe('Goku');
  });
});