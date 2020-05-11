import { TestBed } from '@angular/core/testing';

import { ReposServiceService } from './repos-service.service';

describe('ReposServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReposServiceService = TestBed.get(ReposServiceService);
    expect(service).toBeTruthy();
  });
});
