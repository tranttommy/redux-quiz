import { getDetails } from './detailSelectors';

describe('pokemon page selectors', () => {
  it('gets a pokemon by id from state', () => {
    const state = {
      details: {
        'asdf': 'poop'
      }
    };
    expect(getDetails(state, 'asdf')).toBe('poop');
  });
});
