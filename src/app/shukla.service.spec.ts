import { TestBed } from '@angular/core/testing';

import { ShuklaService } from './shukla.service';

describe('ShuklaService', () => {
  let service: ShuklaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShuklaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
