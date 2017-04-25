import { TestBed, inject } from '@angular/core/testing';

import { MovieDbService } from './movie-db.service';

describe('MovieDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDbService]
    });
  });

  it('should ...', inject([MovieDbService], (service: MovieDbService) => {
    expect(service).toBeTruthy();
  }));
});
