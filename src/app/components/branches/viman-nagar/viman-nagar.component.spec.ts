import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimanNagarComponent } from './viman-nagar.component';

describe('VimanNagarComponent', () => {
  let component: VimanNagarComponent;
  let fixture: ComponentFixture<VimanNagarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VimanNagarComponent]
    });
    fixture = TestBed.createComponent(VimanNagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
