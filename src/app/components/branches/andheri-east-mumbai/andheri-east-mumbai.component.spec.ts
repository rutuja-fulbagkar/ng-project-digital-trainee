import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndheriEastMumbaiComponent } from './andheri-east-mumbai.component';

describe('AndheriEastMumbaiComponent', () => {
  let component: AndheriEastMumbaiComponent;
  let fixture: ComponentFixture<AndheriEastMumbaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndheriEastMumbaiComponent]
    });
    fixture = TestBed.createComponent(AndheriEastMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
