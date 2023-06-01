import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaneComponent } from './thane.component';

describe('ThaneComponent', () => {
  let component: ThaneComponent;
  let fixture: ComponentFixture<ThaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThaneComponent]
    });
    fixture = TestBed.createComponent(ThaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
