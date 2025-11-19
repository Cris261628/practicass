// noticias.page.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticiasPage } from './noticias.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

describe('NoticiasPage', () => {
  let component: NoticiasPage;
  let fixture: ComponentFixture<NoticiasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoticiasPage], 
      imports: [CommonModule, IonicModule] 
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});