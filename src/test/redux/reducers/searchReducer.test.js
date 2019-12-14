import * as actionTypes from '../../../redux/actions/actionTypes';
import searchReducer from '../../../redux/reducers/searchReducer';
import players from '../../testData';

describe('searchReducer', () => {
    it('should return default state action type does not match', () => {
        const newState = searchReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    describe('action types', () => {
        const searchTypes = [
            {
                actionType: actionTypes.SEARCH_BY_NAME,
                searchName: 'name'
            },
            {
                actionType: actionTypes.SEARCH_BY_NATIONALITY,
                searchName: 'nationality'
            },
            {
                actionType: actionTypes.SEARCH_BY_JERSEY_NUMBER,
                searchName: 'jerseyNumber'
            },
            {
                actionType: actionTypes.SEARCH_BY_CONTRACT_UNTIL,
                searchName: 'contractUntil'
            },
            {
                actionType: actionTypes.SEARCH_BY_POSITION,
                searchName: 'position'
            },
            {
                actionType: actionTypes.SEARCH_BY_NAME,
                searchName: 'name'
            },
            {
                actionType: actionTypes.SEARCH_BY_BIRTHDAY,
                searchName: 'dateOfBirth'
            }
        ];
        searchTypes.forEach(searchType => {
            it('should return new state if action type matches', () => {
                const searchText = 'some test text';
                const newState = searchReducer(undefined, {
                    type: searchType.actionType,
                    text: searchText
                });

                expect(newState).toEqual({
                    searchType: searchType.searchName,
                    searchText
                });
            });
        });
    });
});
