import { TestBed } from '@angular/core/testing';

import { JoboffersService } from './joboffers.service';

describe('JoboffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoboffersService = TestBed.get(JoboffersService);
    expect(service).toBeTruthy();
  });
});
