import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsComponent } from './devops.component';

describe('DevopsComponent', () => {
  let component: DevopsComponent;
  let fixture: ComponentFixture<DevopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevopsComponent]
    });
    fixture = TestBed.createComponent(DevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
