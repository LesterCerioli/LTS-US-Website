import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboultUsComponent } from './aboult-us.component';

describe('AboultUsComponent', () => {
  let component: AboultUsComponent;
  let fixture: ComponentFixture<AboultUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboultUsComponent]
    });
    fixture = TestBed.createComponent(AboultUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
