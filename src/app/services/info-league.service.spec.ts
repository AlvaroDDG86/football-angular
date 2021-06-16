import { TestBed } from '@angular/core/testing';

import { InfoLeagueService } from './info-league.service';

describe('InfoLeagueService', () => {
  let service: InfoLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
