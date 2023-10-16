import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudsuitePostsComponent } from './cloudsuite-posts.component';

describe('CloudsuitePostsComponent', () => {
  let component: CloudsuitePostsComponent;
  let fixture: ComponentFixture<CloudsuitePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudsuitePostsComponent]
    });
    fixture = TestBed.createComponent(CloudsuitePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
