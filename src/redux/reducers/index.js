import { combineReducers } from 'redux';
import players from './playerReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
    players: players,
    search: search
});

export default rootReducer;
