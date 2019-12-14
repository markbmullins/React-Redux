import * as selectors from '../../redux/selectors';
import testData from '../testData';

describe('selectors', () => {
    const state = {
        players: testData,
        search: { searchText: 'test search text', searchType: 'name' }
    };

    it('playerSelector returns players', () => {
        expect(selectors.playerSelector(state)).toStrictEqual(state.players);
    });

    it('searchTextSelector returns searchText', () => {
        expect(selectors.searchTextSelector(state)).toStrictEqual(
            state.search.searchText
        );
    });

    it('searchTypeSelector returns searchType', () => {
        expect(selectors.searchTypeSelector(state)).toStrictEqual(
            state.search.searchType
        );
    });

    describe('filteredPlayersSelector', () => {
        // Dates
        it('filters on contractUntil', () => {
            const state = {
                players: testData,
                search: {
                    searchText: '2019-06-30',
                    searchType: 'contractUntil'
                }
            };

            expect(selectors.filteredPlayersSelector(state)).toStrictEqual(
                testData.filter(
                    player => player.contractUntil === state.search.searchText
                )
            );
        });

        it('filters on dateOfBirth', () => {
            const state = {
                players: testData,
                search: {
                    searchText: '1996-12-08',
                    searchType: 'dateOfBirth'
                }
            };

            expect(selectors.filteredPlayersSelector(state)).toStrictEqual([
                {
                    contractUntil: '2021-06-30',
                    dateOfBirth: '1996-12-08',
                    jerseyNumber: 39,
                    name: 'Scott McTominay',
                    nationality: 'Scotland',
                    position: 'Attacking Midfield'
                }
            ]);
        });

        // Numbers
        it('filters on jersey number', () => {
            const state = {
                players: testData,
                search: {
                    searchText: 17,
                    searchType: 'jerseyNumber'
                }
            };

            expect(selectors.filteredPlayersSelector(state)).toStrictEqual([
                {
                    contractUntil: '2019-06-30',
                    dateOfBirth: '1990-03-09',
                    jerseyNumber: 17,
                    name: 'Daley Blind',
                    nationality: 'Netherlands',
                    position: 'Left-Back'
                }
            ]);
        });

        // All other strings
        it('filters on name', () => {
            const state = {
                players: testData,
                search: {
                    searchText: 'Joel Pereira',
                    searchType: 'name'
                }
            };
            expect(selectors.filteredPlayersSelector(state)).toStrictEqual([
                {
                    contractUntil: '2021-06-30',
                    dateOfBirth: '1996-06-28',
                    jerseyNumber: 40,
                    name: 'Joel Pereira',
                    nationality: 'Portugal',
                    position: 'Keeper'
                }
            ]);
        });
    });
});
