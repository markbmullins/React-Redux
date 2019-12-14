import * as actionTypes from '../../../redux/actions/actionTypes';
import playerReducer from '../../../redux/reducers/playerReducer';
import players from '../../testData';

describe('playerReducer', () => {
    it('should return default state action type does not match', () => {
        const newState = playerReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return new state if action type matches', () => {
        const newState = playerReducer(undefined, {
            type: actionTypes.LOAD_PLAYERS_SUCCESS,
            players
        });

        expect(newState).toEqual(players);
    });
});
