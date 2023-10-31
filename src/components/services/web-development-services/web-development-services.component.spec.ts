import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentServicesComponent } from './web-development-services.component';

describe('WebDevelopmentServicesComponent', () => {
  let component: WebDevelopmentServicesComponent;
  let fixture: ComponentFixture<WebDevelopmentServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDevelopmentServicesComponent]
    });
    fixture = TestBed.createComponent(WebDevelopmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
