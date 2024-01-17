const fetchPokemon = require('./api.js');

describe('tests fetchPokemon function / interaction with API', () => {
    test('fetch pokemon and creates new object with select pokemon details', () => {
        fetchPokemon('charizard')
            .then((pokemon) => {
                expect((pokemon.name)).toEqual('charizard');
                expect((pokemon.id)).toEqual(6);
                expect((pokemon.types)).toEqual(['fire', 'flying'])
            });
    });
    test('fetch pokemon and creates new object with select pokemon details', () => {
        fetchPokemon('charizard')
            .then((pokemon) => {
                expect((pokemon.id)).toEqual(6);
            });
    });
    test('fetch pokemon and creates new object with select pokemon details', () => {
        fetchPokemon('charizard')
            .then((pokemon) => {
                expect((pokemon.types)).toEqual(['fire', 'flying'])
            });
    });

});

const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe('tests fetchPokemon with mock API', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });
    
    it('calls pokemon api and returns data to me', async () => {
        const mockResponse = {
            name: 'pikachu',
            id: 25,
            height: 4,
            weight: 60,
            types: [ 'electric' ]
        };

        fetch.mockResponseOnce(JSON.stringify(mockResponse))

        const data = await fetchPokemon('pikachu')

            expect(data.name).toEqual('pikachu');
            expect(data.id).toEqual(25);
            expect(data.height).toEqual(4);
            expect(data.weight).toEqual(60);
            expect(data.types).toEqual(['electric']);
        });
    
});
