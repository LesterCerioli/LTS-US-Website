import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsComponent } from './our-clients.component';

describe('OurClientsComponent', () => {
  let component: OurClientsComponent;
  let fixture: ComponentFixture<OurClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurClientsComponent]
    });
    fixture = TestBed.createComponent(OurClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
