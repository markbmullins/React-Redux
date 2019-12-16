import App from '../../components/App';
import { shallow } from 'enzyme';
import { findByDataTest, testStore, checkProps } from '../utils/testUtils';
import React from 'react';
import testData from '../testData';

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    return shallow(<App store={store} />)
        .childAt(0)
        .dive(); //Accessing contents of connecteed component
};
describe('App', () => {
    let component;
    const state = {
        players: testData,
        search: {
            searchText: '',
            searchType: null
        }
    };
    beforeEach(() => {
        component = setup(state);
    });

    it('should render without errors', () => {
        expect(findByDataTest(component, 'player-table').length).toBe(1);
    });

    it('should render all the components', () => {
        expect(findByDataTest(component, 'app').length).toBe(1);
        expect(findByDataTest(component, 'player-table').length).toBe(1);
        expect(findByDataTest(component, 'title').length).toBe(1);
        expect(findByDataTest(component, 'search-form').length).toBe(1);
    });

    it('should render with correct props', () => {
        const props = {
            players: testData,
            filtered: [],
            dispatch: jest.fn()
        };
        expect(checkProps(App, props)).toBeUndefined();
    });
});
