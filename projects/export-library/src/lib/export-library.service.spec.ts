import { TestBed } from '@angular/core/testing';

import { ExportLibraryService } from './export-library.service';

describe('ExportLibraryService', () => {
  let service: ExportLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
