import './utilities';

describe('capitalize function', () => {
  it('capitalizes the first letter in a string', () => {
    expect('hello'.capitalize()).toBe('Hello');
  });
});
