const fetchPokemon = require('./api.js');
const Pokedex = require('./pokedex.js');

describe('integration tests for pokedex', () => {
    test('catch pokemon, return all caught pokemon', () => {
        const pokedex = new Pokedex();
        const pikachu = fetchPokemon('pikachu');
        const charizard = fetchPokemon('charizard');

        pokedex.catch('pikachu');
        pokedex.catch('charizard');

        expect((pokedex.all())).toEqual([pikachu, charizard])
    })
})

// describe('unit tests for pokedex', () => {
//     test('catch and all methods', () => {
//         const pokedex = new Pokedex();

//         const fakePikachu = {
//             name: 'pikachu'
//         }
//     })
// })

