/**
 * @author Cuong Nguyen
 * @email cuongmn2301@gmail.com
 * @create date 2019-10-09 14:10:17
 * @modify date 2019-10-09 14:10:17
 * @desc pokemon redux action
 */

 import { FETCH_POKEMON, FETCH_SUCCESS, FETCH_FAILED } from './pokemon.types'

 export const fetchPokemonAction = (limit) => {
     return {
         type: FETCH_POKEMON,
         limit
     }
 }

 export const fetchSuccessAction = (receivedPokemons) => {
     return {
         type: FETCH_SUCCESS,
         receivedPokemons
     }
 }

 export const fecthFailedAction = (error) => {
     return {
         type: FETCH_FAILED,
         error
     }
 }