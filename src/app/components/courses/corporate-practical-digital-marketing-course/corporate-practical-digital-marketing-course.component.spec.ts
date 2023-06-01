import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatePracticalDigitalMarketingCourseComponent } from './corporate-practical-digital-marketing-course.component';

describe('CorporatePracticalDigitalMarketingCourseComponent', () => {
  let component: CorporatePracticalDigitalMarketingCourseComponent;
  let fixture: ComponentFixture<CorporatePracticalDigitalMarketingCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporatePracticalDigitalMarketingCourseComponent]
    });
    fixture = TestBed.createComponent(CorporatePracticalDigitalMarketingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
