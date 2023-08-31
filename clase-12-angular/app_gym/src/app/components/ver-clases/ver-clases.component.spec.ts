import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerClasesComponent } from './ver-clases.component';

describe('VerClasesComponent', () => {
  let component: VerClasesComponent;
  let fixture: ComponentFixture<VerClasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerClasesComponent]
    });
    fixture = TestBed.createComponent(VerClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
