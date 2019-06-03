function makeUrl({ search = '', page = 1, id = '' } = {}) {
  let endpoint = `?page=${page}`;
  if(id) endpoint = id;
  if(search) endpoint = `?pokemon=${search}&page=${page}`;
  return `https://alchemy-pokedex.herokuapp.com/api/pokedex/${endpoint}`;
}

describe('logic testing', () => {
  it('creates a query if passed an object with search', () => {
    expect(makeUrl({ search: 'fdfd' })).toBe('https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=fdfd&page=1');
  });

  it('creates a query that gets first page Pokemon if no input', () => {
    expect(makeUrl()).toBe('https://alchemy-pokedex.herokuapp.com/api/pokedex/?page=1');
  });

  it('creates a query that gets the page of Pokemon if passed an object with page', () => {
    expect(makeUrl({ page: 4 })).toBe('https://alchemy-pokedex.herokuapp.com/api/pokedex/?page=4');
  });

  it('creates a query that gets the page of Pokemon with search term if passed an object with page and search', () => {
    expect(makeUrl({ page: 4, search: 'fdfd' })).toBe('https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=fdfd&page=4');
  });

  it('creates a url that can fetch by id if passed an object with id', () => {
    expect(makeUrl({ id: '121212121212121212121212' })).toBe('https://alchemy-pokedex.herokuapp.com/api/pokedex/121212121212121212121212');
  });
});
