import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivandrumComponent } from './trivandrum.component';

describe('TrivandrumComponent', () => {
  let component: TrivandrumComponent;
  let fixture: ComponentFixture<TrivandrumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrivandrumComponent]
    });
    fixture = TestBed.createComponent(TrivandrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
