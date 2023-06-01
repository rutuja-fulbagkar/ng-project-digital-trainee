import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratComponent } from './surat.component';

describe('SuratComponent', () => {
  let component: SuratComponent;
  let fixture: ComponentFixture<SuratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuratComponent]
    });
    fixture = TestBed.createComponent(SuratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
