import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurGithubComponent } from './our-github.component';

describe('OurGithubComponent', () => {
  let component: OurGithubComponent;
  let fixture: ComponentFixture<OurGithubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurGithubComponent]
    });
    fixture = TestBed.createComponent(OurGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
