
const fetchPokemon = (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((jsonData) => {
            return {
                name: jsonData.name,
                id: jsonData.id,
                height: jsonData.height,
                weight: jsonData.weight,
                types: jsonData.types.map(element=>element.type['name'])
                }
        });
};


module.exports = fetchPokemon;