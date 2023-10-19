import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperSectionTravelComponent } from './upper-section-travel.component';

describe('UpperSectionTravelComponent', () => {
  let component: UpperSectionTravelComponent;
  let fixture: ComponentFixture<UpperSectionTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperSectionTravelComponent]
    });
    fixture = TestBed.createComponent(UpperSectionTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
