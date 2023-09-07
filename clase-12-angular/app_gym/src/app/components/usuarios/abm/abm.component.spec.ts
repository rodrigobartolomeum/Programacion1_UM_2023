import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmComponent } from './abm.component';

describe('AbmComponent', () => {
  let component: AbmComponent;
  let fixture: ComponentFixture<AbmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbmComponent]
    });
    fixture = TestBed.createComponent(AbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
