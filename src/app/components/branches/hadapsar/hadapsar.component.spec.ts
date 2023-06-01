import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadapsarComponent } from './hadapsar.component';

describe('HadapsarComponent', () => {
  let component: HadapsarComponent;
  let fixture: ComponentFixture<HadapsarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HadapsarComponent]
    });
    fixture = TestBed.createComponent(HadapsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
