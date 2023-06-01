import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtDigitaltraineeComponent } from './life-at-digitaltrainee.component';

describe('LifeAtDigitaltraineeComponent', () => {
  let component: LifeAtDigitaltraineeComponent;
  let fixture: ComponentFixture<LifeAtDigitaltraineeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeAtDigitaltraineeComponent]
    });
    fixture = TestBed.createComponent(LifeAtDigitaltraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
