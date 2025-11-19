import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NosotrosPage } from './nosotros.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

describe('NosotrosPage', () => {
  let component: NosotrosPage;
  let fixture: ComponentFixture<NosotrosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, IonicModule, NosotrosPage]
    }).compileComponents();

    fixture = TestBed.createComponent(NosotrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});