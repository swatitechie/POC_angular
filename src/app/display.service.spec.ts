// import { TestBed, inject } from '@angular/core/testing';

// import { DisplayService } from './display.service';

// describe('DisplayService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [DisplayService]
//     });
//   });

//   it('should be created', inject([DisplayService], (service: DisplayService) => {
//     expect(service).toBeTruthy();
//   }));
// });

import { TestBed, inject } from '@angular/core/testing';

import { DisplayService } from './display.service';

describe('DisplayService', () => {

  let service: DisplayService;
  beforeEach(() => {

    service = new DisplayService();
    TestBed.configureTestingModule({
      providers: [DisplayService]
    });

    service=TestBed.get(DisplayService);
  });

  it('should be created', inject([DisplayService], (service:DisplayService) => {
    // expect(service).toBeTruthy();
    expect(service).toBeDefined();
  }));
});
