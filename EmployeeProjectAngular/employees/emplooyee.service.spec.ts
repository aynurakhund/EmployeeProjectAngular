import { TestBed } from '@angular/core/testing';

import { EmplooyeeService } from './emplooyee.service';

describe('EmplooyeeService', () => {
  let service: EmplooyeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplooyeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
