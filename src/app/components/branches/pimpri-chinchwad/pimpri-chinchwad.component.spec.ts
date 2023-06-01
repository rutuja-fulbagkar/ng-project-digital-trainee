import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PimpriChinchwadComponent } from './pimpri-chinchwad.component';

describe('PimpriChinchwadComponent', () => {
  let component: PimpriChinchwadComponent;
  let fixture: ComponentFixture<PimpriChinchwadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PimpriChinchwadComponent]
    });
    fixture = TestBed.createComponent(PimpriChinchwadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
