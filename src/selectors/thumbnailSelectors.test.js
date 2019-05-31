import { getPokemons } from './thumbnailSelectors';

describe('thumbnail selectors', () => {
  it('gets results from state', () => {
    const state = {
      results: {
        results: 'poop'
      }
    };

    expect(getPokemons(state)).toBe('poop');
  });
});
