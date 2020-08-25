import { TestBed } from '@angular/core/testing';

import { ChildDataService } from './child-data.service';

describe('ChildDataService', () => {
  let service: ChildDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
