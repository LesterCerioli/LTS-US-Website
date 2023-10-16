import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSectionStateComponent } from './bottom-section-state.component';

describe('BottomSectionStateComponent', () => {
  let component: BottomSectionStateComponent;
  let fixture: ComponentFixture<BottomSectionStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSectionStateComponent]
    });
    fixture = TestBed.createComponent(BottomSectionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
