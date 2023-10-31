import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxBottomSectionComponent } from './ui-ux-bottom-section.component';

describe('UiUxBottomSectionComponent', () => {
  let component: UiUxBottomSectionComponent;
  let fixture: ComponentFixture<UiUxBottomSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiUxBottomSectionComponent]
    });
    fixture = TestBed.createComponent(UiUxBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
