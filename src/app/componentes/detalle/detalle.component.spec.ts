import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { DetalleComponent } from './detalle.component';
import { Personajes } from 'src/app/services/personajes';
import { personajesFirebase } from '../../interfaces/interfaces';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('DetalleComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;

  const personajeMock: personajesFirebase = {
    id: '123',
    nombre: 'Goku',
    apellido: 'Son',
    imagen: 'goku.png',
    descripcion: 'Guerrero saiyajin del universo 7',
    armas: 10,
    dano: 3.2,
    salud: 5.2,
    velocidad: 1.0
  };

  const mockPersonajesService = {
    getPersonajesDetalle: jasmine.createSpy('getPersonajesDetalle').and.returnValue(of(personajeMock))
  };

  const mockModalController = {
    dismiss: jasmine.createSpy('dismiss')
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        { provide: Personajes, useValue: mockPersonajesService },
        { provide: ModalController, useValue: mockModalController }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;
    component.id = '123';
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load personaje details on ngOnInit', () => {
    expect(mockPersonajesService.getPersonajesDetalle).toHaveBeenCalledWith('123');
    expect(component.detallePersonaje.nombre).toBe('Goku');
    expect(component.detallePersonaje.id).toBe('123');
  });

  it('should call modalCtrl.dismiss on regresar()', () => {
    component.regresar();
    expect(mockModalController.dismiss).toHaveBeenCalled();
  });

  it('should log error if id is not provided', () => {
    const consoleSpy = spyOn(console, 'error');
    component.id = undefined!;
    component.ngOnInit();
    expect(consoleSpy).toHaveBeenCalledWith('ID no recibido');
  });
});