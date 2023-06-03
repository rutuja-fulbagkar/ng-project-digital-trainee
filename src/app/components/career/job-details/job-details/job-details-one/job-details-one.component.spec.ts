import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsOneComponent } from './job-details-one.component';

describe('JobDetailsOneComponent', () => {
  let component: JobDetailsOneComponent;
  let fixture: ComponentFixture<JobDetailsOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobDetailsOneComponent]
    });
    fixture = TestBed.createComponent(JobDetailsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
