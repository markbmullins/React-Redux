import { createSelector } from 'reselect';
import { compareDates } from '../utils/dateUtils';

export const playerSelector = state => state.players;
export const searchTextSelector = state => state.search.searchText;
export const searchTypeSelector = state => state.search.searchType;

export const filteredPlayersSelector = createSelector(
    playerSelector,
    searchTypeSelector,
    searchTextSelector,
    (players, searchType, searchText) => {
        if (!players) return [];
        if (!searchType || !searchText) return players;
        return players.filter(player => {
            switch (searchType) {
                case 'contractUntil':
                case 'dateOfBirth': {
                    return compareDates(searchText, player[searchType]);
                }
                case 'jerseyNumber':
                    return player[searchType]
                        .toString()
                        .includes(searchText.toString());
                default:
                    // Case insensitive search
                    return player[searchType]
                        .toUpperCase()
                        .includes(searchText.toUpperCase());
            }
        });
    }
);
