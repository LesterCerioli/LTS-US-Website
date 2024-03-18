import { TestBed } from '@angular/core/testing';

import { IdleUserService } from './idle-user.service';

describe('IdleUserService', () => {
  let service: IdleUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdleUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
