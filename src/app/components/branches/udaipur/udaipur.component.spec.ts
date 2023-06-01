import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdaipurComponent } from './udaipur.component';

describe('UdaipurComponent', () => {
  let component: UdaipurComponent;
  let fixture: ComponentFixture<UdaipurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UdaipurComponent]
    });
    fixture = TestBed.createComponent(UdaipurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
