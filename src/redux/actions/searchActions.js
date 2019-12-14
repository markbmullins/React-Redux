import * as types from './actionTypes';

export function searchPlayersByName(text) {
    return { type: types.SEARCH_BY_NAME, text };
}

export function searchPlayersByPosition(text) {
    return { type: types.SEARCH_BY_POSITION, text };
}

export function searchPlayersByNationality(text) {
    return { type: types.SEARCH_BY_NATIONALITY, text };
}

export function searchPlayersByJersey(text) {
    return { type: types.SEARCH_BY_JERSEY_NUMBER, text };
}

export function searchPlayersByContractUntil(text) {
    return { type: types.SEARCH_BY_CONTRACT_UNTIL, text };
}

export function searchPlayersByDateOfBirth(text) {
    return { type: types.SEARCH_BY_BIRTHDAY, text };
}
