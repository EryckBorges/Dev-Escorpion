const pokeApi = {}

pokeApi.getPokemonDados = async (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemon = async (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((result) => result.json())
        .then((jsonBody) => jsonBody.results)
        .then((detailsPokemons) => detailsPokemons.map(pokeApi.getPokemonDados))
        .then((detailsRequest) => Promise.all(detailsRequest))
        .then((pokemons) => pokemons)
}

pokeApi.getIdPokemonEvolution = async (pokemonList) => {
    console.log(pokemonList);

    const promises = pokemonList.map(async (p, i) => {
        const url = p.species.url;
        console.log(url, i);

        const response = await fetch(url);
        const data = await response.json();
        return data.id;
    });

    return Promise.all(promises);
};

