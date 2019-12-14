import React from 'react';
import { shallow } from 'enzyme';
import PlayerTable from '../../components/PlayerTable';
import { formatDate } from '../../utils/dateUtils';
import { findByDataTest, checkProps } from '../utils/testUtils';
import testData from '../testData';

const setup = (props = {}) => {
    return shallow(<PlayerTable {...props} />);
};

describe('Player Table', () => {
    const props = { players: testData, format: formatDate };

    let component;
    beforeEach(() => {
        component = setup(props);
    });

    it('should render loading with no players', () => {
        expect(
            findByDataTest(
                setup({ players: null, format: formatDate }),
                'loading'
            )
        ).toHaveLength(1);
    });

    it('should render without errors', () => {
        expect(findByDataTest(component, 'player-table')).toHaveLength(1);
    });

    it('should render with correct props', () => {
        expect(checkProps(PlayerTable, props)).toBeUndefined();
    });

    it('should give warning for incorrect props', () => {
        expect(checkProps(PlayerTable, {})).toBeDefined();
    });

    it('should render all the players', () => {
        expect(findByDataTest(component, 'table-row')).toHaveLength(
            props.players.length
        );
    });

    it('should render all the attributes', () => {
        const attributes = [
            'name',
            'position',
            'jerseyNumber',
            'nationality',
            'contractUntil',
            'dateOfBirth'
        ];

        attributes.forEach(attr => {
            expect(findByDataTest(component, attr)).toHaveLength(
                props.players.length
            );
        });
    });
});
