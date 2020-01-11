import { TestBed } from '@angular/core/testing';

import { SCAAnalyzerService } from './scaanalyzer.service';

describe('SCAAnalyzerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SCAAnalyzerService = TestBed.get(SCAAnalyzerService);
    expect(service).toBeTruthy();
  });
});
