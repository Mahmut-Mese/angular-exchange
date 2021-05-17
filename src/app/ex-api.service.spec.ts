import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ExApiService } from './ex-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExApiService', () => {
  let service: ExApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(ExApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
