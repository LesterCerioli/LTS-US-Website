import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmErpBottomSectionComponent } from './crm-erp-bottom-section.component';

describe('CrmErpBottomSectionComponent', () => {
  let component: CrmErpBottomSectionComponent;
  let fixture: ComponentFixture<CrmErpBottomSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrmErpBottomSectionComponent]
    });
    fixture = TestBed.createComponent(CrmErpBottomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
