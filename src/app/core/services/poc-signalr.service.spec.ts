import { TestBed } from '@angular/core/testing';

import { PocSignalrService } from './poc-signalr.service';

describe('PocSignalrService', () => {
  let service: PocSignalrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocSignalrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
