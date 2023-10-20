import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateServicesComponent } from './real-state-services.component';

describe('RealStateServicesComponent', () => {
  let component: RealStateServicesComponent;
  let fixture: ComponentFixture<RealStateServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealStateServicesComponent]
    });
    fixture = TestBed.createComponent(RealStateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
