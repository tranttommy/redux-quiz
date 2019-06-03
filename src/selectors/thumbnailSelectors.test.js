import { getThumbnails } from './thumbnailSelectors';

describe('thumbnail selectors', () => {
  it('gets results from state', () => {
    const state = {
      thumbnails: 'poop'
    };

    expect(getThumbnails(state)).toBe('poop');
  });
});
