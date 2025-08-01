import { TestBed } from '@angular/core/testing';

import { StatusIncidentServiceService } from './status-incident-service.service';

describe('StatusIncidentServiceService', () => {
  let service: StatusIncidentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusIncidentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
