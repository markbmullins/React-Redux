import * as types from '../actions/actionTypes';

export default function playerReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_PLAYERS_SUCCESS:
            return [...action.players];
        // Could add more cases for Create, Update, Delete
        default:
            return state;
    }
}
