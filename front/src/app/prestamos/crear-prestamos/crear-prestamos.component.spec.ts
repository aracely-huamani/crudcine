import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrestamosComponent } from './crear-prestamos.component';

describe('CrearPrestamosComponent', () => {
  let component: CrearPrestamosComponent;
  let fixture: ComponentFixture<CrearPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPrestamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
