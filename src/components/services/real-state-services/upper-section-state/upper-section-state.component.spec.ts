import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperSectionStateComponent } from './upper-section-state.component';

describe('UpperSectionStateComponent', () => {
  let component: UpperSectionStateComponent;
  let fixture: ComponentFixture<UpperSectionStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperSectionStateComponent]
    });
    fixture = TestBed.createComponent(UpperSectionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
