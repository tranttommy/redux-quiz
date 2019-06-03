import { getThumbnails, getCurrentPage, getTotalPages } from './thumbnailSelectors';

describe('thumbnail selectors', () => {
  const state = {
    thumbnails: {
      results: 'poop',
      currentPage: 1,
      totalPages: 20
    }
  };

  it('gets results from state', () => {
    expect(getThumbnails(state)).toBe('poop');
  });

  it('gets current page from state', () => {
    expect(getCurrentPage(state)).toBe(1);
  });

  it('gets total pages from state', () => {
    expect(getTotalPages(state)).toBe(20);
  });
});
