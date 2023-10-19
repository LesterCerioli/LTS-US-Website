import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNavbarComponent } from './blogNavbar.component';

describe('BlogNavbarComponent', () => {
  let component: BlogNavbarComponent;
  let fixture: ComponentFixture<BlogNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogNavbarComponent],
    });
    fixture = TestBed.createComponent(BlogNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
