import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmErpUpperSectionComponent } from './crm-erp-upper-section.component';

describe('CrmErpUpperSectionComponent', () => {
  let component: CrmErpUpperSectionComponent;
  let fixture: ComponentFixture<CrmErpUpperSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrmErpUpperSectionComponent]
    });
    fixture = TestBed.createComponent(CrmErpUpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
