import { TestBed, inject } from '@angular/core/testing';

import { UploadDisplayService } from './upload-display.service';

describe('UploadDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadDisplayService]
    });
  });

  it('should be created', inject([UploadDisplayService], (service: UploadDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
