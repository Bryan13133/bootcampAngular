import { TestBed } from '@angular/core/testing';

import { CanDeactivateSignupGuard } from './can-deactivate-signup.guard';

describe('CanDeactivateSignupGuard', () => {
  let guard: CanDeactivateSignupGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateSignupGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
