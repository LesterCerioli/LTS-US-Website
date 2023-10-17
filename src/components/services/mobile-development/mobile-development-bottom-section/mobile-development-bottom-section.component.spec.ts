import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevelopmentBottomSectionComponent } from './mobile-development-bottom-section.component';

describe('MobileDevelopmentBottomSectionComponent', () => {
  let component: MobileDevelopmentBottomSectionComponent;
  let fixture: ComponentFixture<MobileDevelopmentBottomSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileDevelopmentBottomSectionComponent]
    });
    fixture = TestBed.createComponent(MobileDevelopmentBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
