import { TestBed } from '@angular/core/testing';

import { ActivePageService } from './active-page.service';

describe('ActivePageService', () => {
  let service: ActivePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
