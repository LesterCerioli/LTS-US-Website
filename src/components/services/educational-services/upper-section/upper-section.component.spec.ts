import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperSectionComponent } from './upper-section.component';

describe('UpperSectionComponent', () => {
  let component: UpperSectionComponent;
  let fixture: ComponentFixture<UpperSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperSectionComponent]
    });
    fixture = TestBed.createComponent(UpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
