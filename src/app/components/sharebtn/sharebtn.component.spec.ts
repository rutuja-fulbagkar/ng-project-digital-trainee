import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharebtnComponent } from './sharebtn.component';

describe('SharebtnComponent', () => {
  let component: SharebtnComponent;
  let fixture: ComponentFixture<SharebtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharebtnComponent]
    });
    fixture = TestBed.createComponent(SharebtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
