import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBlogComponent } from './navbar-blog.component';

describe('NavbarBlogComponent', () => {
  let component: NavbarBlogComponent;
  let fixture: ComponentFixture<NavbarBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarBlogComponent]
    });
    fixture = TestBed.createComponent(NavbarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
