import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPostsComponent } from './backend-posts.component';

describe('BackendPostsComponent', () => {
  let component: BackendPostsComponent;
  let fixture: ComponentFixture<BackendPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendPostsComponent]
    });
    fixture = TestBed.createComponent(BackendPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
