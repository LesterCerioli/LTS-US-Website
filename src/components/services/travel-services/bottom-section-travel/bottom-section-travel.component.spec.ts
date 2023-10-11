import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSectionTravelComponent } from './bottom-section-travel.component';

describe('BottomSectionTravelComponent', () => {
  let component: BottomSectionTravelComponent;
  let fixture: ComponentFixture<BottomSectionTravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSectionTravelComponent]
    });
    fixture = TestBed.createComponent(BottomSectionTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
