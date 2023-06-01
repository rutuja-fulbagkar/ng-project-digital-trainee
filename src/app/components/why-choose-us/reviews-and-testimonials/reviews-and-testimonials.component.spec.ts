import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsAndTestimonialsComponent } from './reviews-and-testimonials.component';

describe('ReviewsAndTestimonialsComponent', () => {
  let component: ReviewsAndTestimonialsComponent;
  let fixture: ComponentFixture<ReviewsAndTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsAndTestimonialsComponent]
    });
    fixture = TestBed.createComponent(ReviewsAndTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
