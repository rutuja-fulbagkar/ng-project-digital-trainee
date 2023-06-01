import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementsCompaniesComponent } from './placements-companies.component';

describe('PlacementsCompaniesComponent', () => {
  let component: PlacementsCompaniesComponent;
  let fixture: ComponentFixture<PlacementsCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacementsCompaniesComponent]
    });
    fixture = TestBed.createComponent(PlacementsCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
