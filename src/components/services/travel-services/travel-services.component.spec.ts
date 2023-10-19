import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelServicesComponent } from './travel-services.component';

describe('TravelServicesComponent', () => {
  let component: TravelServicesComponent;
  let fixture: ComponentFixture<TravelServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelServicesComponent]
    });
    fixture = TestBed.createComponent(TravelServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
