import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsPostsComponent } from './devops-posts.component';

describe('DevopsPostsComponent', () => {
  let component: DevopsPostsComponent;
  let fixture: ComponentFixture<DevopsPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevopsPostsComponent]
    });
    fixture = TestBed.createComponent(DevopsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
