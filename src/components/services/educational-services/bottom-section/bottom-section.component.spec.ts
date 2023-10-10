import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSectionComponent } from './bottom-section.component';

describe('BottomSectionComponent', () => {
  let component: BottomSectionComponent;
  let fixture: ComponentFixture<BottomSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSectionComponent]
    });
    fixture = TestBed.createComponent(BottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
