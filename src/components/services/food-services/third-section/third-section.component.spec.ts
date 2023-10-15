import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSectionComponent } from './third-section.component';

describe('ThirdSectionComponent', () => {
  let component: ThirdSectionComponent;
  let fixture: ComponentFixture<ThirdSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdSectionComponent]
    });
    fixture = TestBed.createComponent(ThirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
