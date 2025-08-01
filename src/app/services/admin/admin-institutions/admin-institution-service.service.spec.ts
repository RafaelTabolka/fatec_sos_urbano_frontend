import { TestBed } from '@angular/core/testing';

import { AdminInstitutionServiceService } from './admin-institution-service.service';

describe('AdminInstitutionServiceService', () => {
  let service: AdminInstitutionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInstitutionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
