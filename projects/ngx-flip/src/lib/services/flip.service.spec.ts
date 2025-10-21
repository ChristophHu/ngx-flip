import { TestBed } from '@angular/core/testing';

import { FlipService } from './flip.service';

describe('FlipService', () => {
  let service: FlipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
