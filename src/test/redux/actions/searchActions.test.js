import * as searchActions from '../../../redux/actions/searchActions';
import * as types from '../../../redux/actions/actionTypes';

describe('searchActions', () => {
    const searchText = 'some search text';
    it('should return an actionType object with the correct type', () => {
        const nameAction = searchActions.searchPlayersByName(searchText);
        let expectedAction = {
            type: types.SEARCH_BY_NAME,
            text: searchText
        };
        expect(nameAction).toStrictEqual(expectedAction);

        const positionAction = searchActions.searchPlayersByPosition(
            searchText
        );
        expectedAction = {
            type: types.SEARCH_BY_POSITION,
            text: searchText
        };
        expect(positionAction).toStrictEqual(expectedAction);

        const jerseyAction = searchActions.searchPlayersByJersey(searchText);
        expectedAction = {
            type: types.SEARCH_BY_JERSEY_NUMBER,
            text: searchText
        };
        expect(jerseyAction).toStrictEqual(expectedAction);

        const nationalityAction = searchActions.searchPlayersByNationality(
            searchText
        );
        expectedAction = {
            type: types.SEARCH_BY_NATIONALITY,
            text: searchText
        };
        expect(nationalityAction).toStrictEqual(expectedAction);

        const contractUntilAction = searchActions.searchPlayersByContractUntil(
            searchText
        );
        expectedAction = {
            type: types.SEARCH_BY_CONTRACT_UNTIL,
            text: searchText
        };
        expect(contractUntilAction).toStrictEqual(expectedAction);

        const DOBAction = searchActions.searchPlayersByDateOfBirth(searchText);
        expectedAction = {
            type: types.SEARCH_BY_BIRTHDAY,
            text: searchText
        };
        expect(DOBAction).toStrictEqual(expectedAction);
    });
});
