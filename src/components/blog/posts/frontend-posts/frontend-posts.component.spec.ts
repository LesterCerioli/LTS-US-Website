import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPostsComponent } from './frontend-posts.component';

describe('FrontendPostsComponent', () => {
  let component: FrontendPostsComponent;
  let fixture: ComponentFixture<FrontendPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendPostsComponent]
    });
    fixture = TestBed.createComponent(FrontendPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
