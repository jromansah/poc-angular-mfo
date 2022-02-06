import { TestBed } from '@angular/core/testing';

import { JournalStoreService } from './journal-store.service';

describe('JournalStoreService', () => {
  let service: JournalStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
