import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodServicesComponent } from './food-services.component';

describe('FoodServicesComponent', () => {
  let component: FoodServicesComponent;
  let fixture: ComponentFixture<FoodServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodServicesComponent]
    });
    fixture = TestBed.createComponent(FoodServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
