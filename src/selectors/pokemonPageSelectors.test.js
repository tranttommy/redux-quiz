import { getPokemon } from './pokemonPageSelectors';

describe('pokemon page selectors', () => {
  it('gets a pokemon by id from state', () => {
    const state = {
      'asdf': 'poop'
    };
    expect(getPokemon(state, 'asdf')).toBe('poop');
  });
});
