import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmErpServicesComponent } from './crm-erp-services.component';

describe('CrmErpServicesComponent', () => {
  let component: CrmErpServicesComponent;
  let fixture: ComponentFixture<CrmErpServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrmErpServicesComponent]
    });
    fixture = TestBed.createComponent(CrmErpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
