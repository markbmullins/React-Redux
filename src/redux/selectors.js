import { createSelector } from 'reselect';
import { compareDates } from '../utils/dateUtils';
import { format } from 'date-fns';

export const playerSelector = state => state.players;
export const searchTextSelector = state => state.search.searchText;
export const searchTypeSelector = state => state.search.searchType;

export const birthdaySelector = createSelector(playerSelector, players =>
    players.map(player => format(player.dateOfBirth, 'MMMM do, y'))
);

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
                case 'jersey':
                    return player[searchType]
                        .toString()
                        .includes(searchText.toString());
                default:
                    return player[searchType].includes(searchText);
            }
        });
    }
);
