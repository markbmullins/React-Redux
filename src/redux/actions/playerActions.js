import * as types from './actionTypes';
import * as playerApi from '../../api/playerApi';

// Action creator
function loadPlayersSuccess(players) {
    // Action
    return { type: types.LOAD_PLAYERS_SUCCESS, players };
}

// Thunk
export function loadPlayers() {
    return function(dispatch) {
        return playerApi.getPlayers().then(players => {
            dispatch(loadPlayersSuccess(players));
        });
    };
}
