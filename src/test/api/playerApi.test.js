import { getPlayers } from '../../api/playerApi';
import testData from '../testData';
describe('playerApi', () => {
    beforeEach(() => {
        fetch.resetMocks();
        jest.spyOn(console, 'error');
        console.error.mockImplementation(() => {});
    });

    afterEach(() => {
        console.error.mockRestore();
    });

    it('calls JSON endpoint and returns response', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: testData }));

        getPlayers().then(res => {
            expect(res.data).toEqual(testData);
        });

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(
            'https://football-players-b31f2.firebaseio.com/players.json'
        );
    });

    it('handles 400 status codes', async () => {
        fetch.mockResponseOnce(JSON.stringify({ data: null }), {
            status: 400,
            statusText: 'Bad Request'
        });

        expect.assertions(1);

        try {
            await getPlayers();
        } catch (e) {
            expect(e).toStrictEqual(new Error('{"data":null}'));
        }
    });

    it('handles other status codes', async () => {
        fetch.mockResponseOnce(JSON.stringify({ data: null }), {
            status: 500,
            statusText: 'Internal Server Error'
        });

        expect.assertions(1);

        try {
            await getPlayers();
        } catch (e) {
            expect(e).toStrictEqual(new Error('Network response was not ok.'));
        }
    });
});
