/**
 * @author Cuong Nguyen
 * @email cuongmn2301@gmail.com
 * @create date 2019-10-09 14:30:35
 * @modify date 2019-10-09 14:30:35
 * @desc Restful API sagas control
 */

const urlGet = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

function* getPokemonsFromApi() {
    const response = yield fetch(urlGet, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: ''
    });
    
    const pokemons = yield response.status === 200 ? response.json() : []
    console.log('hello2', pokemons)
    return pokemons;
}
export const Api = {
    getPokemonsFromApi
}
