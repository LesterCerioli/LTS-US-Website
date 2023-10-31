import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxComponentComponent } from './ui-ux-component.component';

describe('UiUxComponentComponent', () => {
  let component: UiUxComponentComponent;
  let fixture: ComponentFixture<UiUxComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiUxComponentComponent]
    });
    fixture = TestBed.createComponent(UiUxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
