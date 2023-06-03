import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApplicationSubmitComponent } from './career-application-submit.component';

describe('CareerApplicationSubmitComponent', () => {
  let component: CareerApplicationSubmitComponent;
  let fixture: ComponentFixture<CareerApplicationSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerApplicationSubmitComponent]
    });
    fixture = TestBed.createComponent(CareerApplicationSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
