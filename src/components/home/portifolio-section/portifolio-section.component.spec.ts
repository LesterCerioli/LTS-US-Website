import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioSectionComponent } from './portifolio-section.component';

describe('PortifolioSectionComponent', () => {
  let component: PortifolioSectionComponent;
  let fixture: ComponentFixture<PortifolioSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortifolioSectionComponent]
    });
    fixture = TestBed.createComponent(PortifolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
