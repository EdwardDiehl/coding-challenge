import { TestBed, inject } from '@angular/core/testing';
import { JokeService } from './joke.service';

describe('JokService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeService]
    });
  });

  it('should ...', inject([JokeService], (service: JokeService) => {
    expect(service).toBeTruthy();
  }));
});
