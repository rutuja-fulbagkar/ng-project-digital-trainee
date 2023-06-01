import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseDigitalMarketingCourseWithUsComponent } from './why-choose-digital-marketing-course-with-us.component';

describe('WhyChooseDigitalMarketingCourseWithUsComponent', () => {
  let component: WhyChooseDigitalMarketingCourseWithUsComponent;
  let fixture: ComponentFixture<WhyChooseDigitalMarketingCourseWithUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyChooseDigitalMarketingCourseWithUsComponent]
    });
    fixture = TestBed.createComponent(WhyChooseDigitalMarketingCourseWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
