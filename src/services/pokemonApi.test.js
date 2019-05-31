function makeUrl(input = '') {
  let endpoint;
  input.length === 24 ? endpoint = input : endpoint = `?pokemon=${input}`;
  return `https://alchemy-pokedex.herokuapp.com/api/pokedex/${endpoint}`;
}

describe('logic testing', () => {
  it('creates a query if the length is not 24', () => {
    expect(makeUrl('fdfd')).toBe('https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=fdfd');
  });

  it('creates a query that gets all Pokemon if no input', () => {
    expect(makeUrl()).toBe('https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=');
  });

  it('creates a url that can fetch by id if the input length is 24', () => {
    expect(makeUrl('121212121212121212121212')).toBe('https://alchemy-pokedex.herokuapp.com/api/pokedex/121212121212121212121212');
  });
});
