import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingKnowledgeVideosComponent } from './digital-marketing-knowledge-videos.component';

describe('DigitalMarketingKnowledgeVideosComponent', () => {
  let component: DigitalMarketingKnowledgeVideosComponent;
  let fixture: ComponentFixture<DigitalMarketingKnowledgeVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalMarketingKnowledgeVideosComponent]
    });
    fixture = TestBed.createComponent(DigitalMarketingKnowledgeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
