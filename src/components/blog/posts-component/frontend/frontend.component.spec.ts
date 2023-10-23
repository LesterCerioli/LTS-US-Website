import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendComponent } from './frontend.component';

describe('FrontendComponent', () => {
  let component: FrontendComponent;
  let fixture: ComponentFixture<FrontendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendComponent]
    });
    fixture = TestBed.createComponent(FrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
