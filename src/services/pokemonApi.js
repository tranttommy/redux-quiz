export function fetchPokemon(input = '') {
  let endpoint;
  input.length === 24 ? endpoint = input : endpoint = `?pokemon=${input}`;
  return fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${endpoint}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'poop';
      return json;
    });
}
