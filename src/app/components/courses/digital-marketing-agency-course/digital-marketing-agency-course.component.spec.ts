import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingAgencyCourseComponent } from './digital-marketing-agency-course.component';

describe('DigitalMarketingAgencyCourseComponent', () => {
  let component: DigitalMarketingAgencyCourseComponent;
  let fixture: ComponentFixture<DigitalMarketingAgencyCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalMarketingAgencyCourseComponent]
    });
    fixture = TestBed.createComponent(DigitalMarketingAgencyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
