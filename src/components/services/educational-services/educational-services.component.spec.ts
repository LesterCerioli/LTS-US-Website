import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalServicesComponent } from './educational-services.component';

describe('EducationPageComponent', () => {
  let component: EducationalServicesComponent;
  let fixture: ComponentFixture<EducationalServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationalServicesComponent]
    });
    fixture = TestBed.createComponent(EducationalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
