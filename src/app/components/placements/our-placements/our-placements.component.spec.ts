import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPlacementsComponent } from './our-placements.component';

describe('OurPlacementsComponent', () => {
  let component: OurPlacementsComponent;
  let fixture: ComponentFixture<OurPlacementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPlacementsComponent]
    });
    fixture = TestBed.createComponent(OurPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
