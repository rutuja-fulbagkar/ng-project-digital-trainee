import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NalStopComponent } from './nal-stop.component';

describe('NalStopComponent', () => {
  let component: NalStopComponent;
  let fixture: ComponentFixture<NalStopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NalStopComponent]
    });
    fixture = TestBed.createComponent(NalStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
