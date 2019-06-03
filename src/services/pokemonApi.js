export function fetchPokemon({ search = '', page = 1, id = '' } = {}) {
  let endpoint = `?page=${page}`;
  if(id) endpoint = id;
  if(search) endpoint = `?pokemon=${search}&page=${page}`;
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${endpoint}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'poop';
      return json;
    });
}
