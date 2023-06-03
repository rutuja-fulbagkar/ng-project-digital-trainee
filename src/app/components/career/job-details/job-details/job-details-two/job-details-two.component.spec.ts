import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsTwoComponent } from './job-details-two.component';

describe('JobDetailsTwoComponent', () => {
  let component: JobDetailsTwoComponent;
  let fixture: ComponentFixture<JobDetailsTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobDetailsTwoComponent]
    });
    fixture = TestBed.createComponent(JobDetailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
