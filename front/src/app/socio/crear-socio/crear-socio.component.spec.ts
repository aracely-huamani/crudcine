import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSocioComponent } from './crear-socio.component';

describe('CrearSocioComponent', () => {
  let component: CrearSocioComponent;
  let fixture: ComponentFixture<CrearSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
