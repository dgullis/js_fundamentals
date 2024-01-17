const fetchPokemon = require('./api.js');


class Pokedex {
    constructor() {
        this.pokemon = []
    }

    catch(name) {
        this.pokemon.push(fetchPokemon(name));
    }

    all() {
        return this.pokemon;
    }

}

module.exports = Pokedex;

// fetchPokemon('charizard')
//     .then((pokemon) => console.log(pokemon));

// fetchPokemon('pikachu')
//     .then((pokemon) => console.log(pokemon));