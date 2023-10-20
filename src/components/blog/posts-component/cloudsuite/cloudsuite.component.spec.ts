import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsuiteComponent } from './cloudsuite.component';

describe('CloudsuiteComponent', () => {
  let component: CloudsuiteComponent;
  let fixture: ComponentFixture<CloudsuiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudsuiteComponent]
    });
    fixture = TestBed.createComponent(CloudsuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
