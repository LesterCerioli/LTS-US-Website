import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSectionComponent } from './second-section.component';

describe('SecondSectionComponent', () => {
  let component: SecondSectionComponent;
  let fixture: ComponentFixture<SecondSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondSectionComponent]
    });
    fixture = TestBed.createComponent(SecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
