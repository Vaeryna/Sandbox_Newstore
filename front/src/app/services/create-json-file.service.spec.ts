import { TestBed } from '@angular/core/testing';

import { CreateJsonFileService } from './create-json-file.service';

describe('CreateJsonFileService', () => {
  let service: CreateJsonFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateJsonFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
