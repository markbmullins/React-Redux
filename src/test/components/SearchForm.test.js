import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../../components/SearchForm';
import { findByDataTest, checkProps } from '../utils/testUtils';

const setup = (props = {}) => {
    return shallow(<SearchForm {...props} />);
};

describe('Search Form', () => {
    const handleSearch = jest.fn();
    const props = { handleSearch: handleSearch };

    let component;
    beforeEach(() => {
        component = setup(props);
    });

    it('should render without errors', () => {
        expect(findByDataTest(component, 'form')).toHaveLength(1);
    });

    it('should render with correct props', () => {
        expect(checkProps(SearchForm, props)).toBeUndefined();
    });

    it('should give warning for incorrect props', () => {
        expect(checkProps(SearchForm, {})).toBeDefined();
    });

    it('should render all the fields', () => {
        const attributes = [
            'name-input',
            'position-input',
            'jersey-input',
            'nationality-input',
            'contract-input',
            'DOB-input'
        ];

        attributes.forEach(attr => {
            expect(findByDataTest(component, attr)).toHaveLength(1);
        });
    });

    it('should call onChange for all inputs', () => {
        const event = {
            target: { value: 'value' }
        };
        const inputs = [
            {
                inputName: 'name-input-control',
                searchName: 'name'
            },
            {
                inputName: 'position-input-control',
                searchName: 'position'
            },
            {
                inputName: 'jersey-input-control',
                searchName: 'jersey'
            },
            {
                inputName: 'nationality-input-control',
                searchName: 'nationality'
            },
            {
                inputName: 'contract-input-control',
                searchName: 'contractUntil'
            },
            {
                inputName: 'DOB-input-control',
                searchName: 'dateOfBirth'
            }
        ];

        inputs.forEach(input => {
            findByDataTest(component, input.inputName).simulate(
                'change',
                event
            );
            expect(handleSearch).toBeCalledWith(input.searchName, event);
        });
    });
});
