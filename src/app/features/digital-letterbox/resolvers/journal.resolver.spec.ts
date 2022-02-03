import { TestBed } from '@angular/core/testing';

import { JournalResolver } from './journal.resolver';

describe('JournalResolver', () => {
  let resolver: JournalResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(JournalResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
