import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFirstSectionComponent } from './portfolio-first-section.component';

describe('PortfolioFirstSectionComponent', () => {
  let component: PortfolioFirstSectionComponent;
  let fixture: ComponentFixture<PortfolioFirstSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioFirstSectionComponent]
    });
    fixture = TestBed.createComponent(PortfolioFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
