import { handleResponse, handleError } from './apiUtils';
const url = 'https://football-players-b31f2.firebaseio.com/players.json';

export function getPlayers() {
    return fetch(url)
        .then(handleResponse)
        .catch(handleError);
}
