import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPlanificacionesComponent } from './ver-planificaciones.component';

describe('VerPlanificacionesComponent', () => {
  let component: VerPlanificacionesComponent;
  let fixture: ComponentFixture<VerPlanificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPlanificacionesComponent]
    });
    fixture = TestBed.createComponent(VerPlanificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
