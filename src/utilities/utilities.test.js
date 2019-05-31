import './utilities';

describe('capitalize method', () => {
  it('capitalizes the first letter in a string', () => {
    expect('hello'.capitalize()).toBe('Hello');
  });

  it('capitalizes the first letter in a string', () => {
    expect('hello world'.capitalize()).toBe('Hello world');
  });
});
