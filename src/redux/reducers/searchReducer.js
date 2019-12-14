import * as types from '../actions/actionTypes';

export default function searchReducer(state = [], action) {
    switch (action.type) {
        case types.SEARCH_BY_BIRTHDAY:
            return Object.assign({}, state, {
                searchText: action.text,
                searchType: 'dateOfBirth'
            });
        case types.SEARCH_BY_POSITION:
            return Object.assign({}, state, {
                searchText: action.text,
                searchType: 'position'
            });
        case types.SEARCH_BY_CONTRACT_UNTIL:
            return Object.assign({}, state, {
                searchText: action.text,
                searchType: 'contractUntil'
            });
        case types.SEARCH_BY_JERSEY_NUMBER:
            return Object.assign({}, state, {
                searchText: action.text,
                searchType: 'jerseyNumber'
            });
        case types.SEARCH_BY_NAME:
            return Object.assign({}, state, {
                searchText: action.text,
                searchType: 'name'
            });
        case types.SEARCH_BY_NATIONALITY:
            return Object.assign({}, state, {
                searchText: action.text,
                searchType: 'nationality'
            });
        default:
            return state;
    }
}
