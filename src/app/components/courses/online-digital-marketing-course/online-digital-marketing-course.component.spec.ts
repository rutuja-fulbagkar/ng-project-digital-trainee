import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDigitalMarketingCourseComponent } from './online-digital-marketing-course.component';

describe('OnlineDigitalMarketingCourseComponent', () => {
  let component: OnlineDigitalMarketingCourseComponent;
  let fixture: ComponentFixture<OnlineDigitalMarketingCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineDigitalMarketingCourseComponent]
    });
    fixture = TestBed.createComponent(OnlineDigitalMarketingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
