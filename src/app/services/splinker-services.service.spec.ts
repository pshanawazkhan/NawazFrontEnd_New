import { TestBed } from '@angular/core/testing';

import { SplinkerServicesService } from './splinker-services.service';

describe('SplinkerServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplinkerServicesService = TestBed.get(SplinkerServicesService);
    expect(service).toBeTruthy();
  });
});
