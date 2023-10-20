import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevelopmentUpperSectionComponent } from './mobile-development-upper-section.component';

describe('MobileDevelopmentUpperSectionComponent', () => {
  let component: MobileDevelopmentUpperSectionComponent;
  let fixture: ComponentFixture<MobileDevelopmentUpperSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileDevelopmentUpperSectionComponent]
    });
    fixture = TestBed.createComponent(MobileDevelopmentUpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
