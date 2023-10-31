import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxUpperSectionComponent } from './ui-ux-upper-section.component';

describe('UiUxUpperSectionComponent', () => {
  let component: UiUxUpperSectionComponent;
  let fixture: ComponentFixture<UiUxUpperSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiUxUpperSectionComponent]
    });
    fixture = TestBed.createComponent(UiUxUpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
