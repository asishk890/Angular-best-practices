import { TestBed } from '@angular/core/testing';

import { SignalCommonService } from './signal-common.service';

describe('SignalCommonService', () => {
  let service: SignalCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
