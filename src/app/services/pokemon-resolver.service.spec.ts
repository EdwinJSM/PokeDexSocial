import { TestBed } from '@angular/core/testing';

import { PokemonResolverService } from './pokemon-resolver.service';

describe('PokemonResolverService', () => {
  let service: PokemonResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
