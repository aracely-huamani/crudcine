import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSocioComponent } from './listar-socio.component';

describe('ListarSocioComponent', () => {
  let component: ListarSocioComponent;
  let fixture: ComponentFixture<ListarSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
