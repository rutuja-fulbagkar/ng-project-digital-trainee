import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingKnowledgeBlogsComponent } from './digital-marketing-knowledge-blogs.component';

describe('DigitalMarketingKnowledgeBlogsComponent', () => {
  let component: DigitalMarketingKnowledgeBlogsComponent;
  let fixture: ComponentFixture<DigitalMarketingKnowledgeBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalMarketingKnowledgeBlogsComponent]
    });
    fixture = TestBed.createComponent(DigitalMarketingKnowledgeBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
