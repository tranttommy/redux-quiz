import { getComments } from './commentSelectors';

describe('commentSelectors', () => {
  it('gets comments by id from state', () => {
    const state = {
      comments: {
        poop: 'help'
      }
    };
    expect(getComments(state, 'poop')).toBe('help');
  });
});
