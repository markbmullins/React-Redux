import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const positionOptions = [
    'Attacking Midfield',
    'Central Midfield',
    'Centre-Back',
    'Centre-Forward',
    'Centre-Forward',
    'Defensive Midfield',
    'Keeper',
    'Left Midfield',
    'Left Wing',
    'Left-Back',
    'Right-Back'
];

const SearchForm = ({ handleSearch }) => {
    return (
        <div className="form">
            <Form data-test="form">
                <Form.Row>
                    <Form.Group controlId="player-name" data-test="name-input">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control
                            data-test="name-input-control"
                            type="input"
                            placeholder="Enter Name..."
                            onChange={e => handleSearch('name', e)}
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="player-position"
                        data-test="position-input">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={e => handleSearch('position', e)}
                            data-test="position-input-control">
                            <option></option>
                            {positionOptions.map((position, index) => (
                                <option key={index}>{position}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group
                        controlId="playerNationality"
                        data-test="nationality-input">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Enter Nationality..."
                            onChange={e => handleSearch('nationality', e)}
                            data-test="nationality-input-control"
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="playerJersey"
                        data-test="jersey-input">
                        <Form.Label>Jersey Number</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Enter Jersey Number..."
                            onChange={e => handleSearch('jersey', e)}
                            data-test="jersey-input-control"
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="playerContractUntil"
                        data-test="contract-input">
                        <Form.Label>Contract Until</Form.Label>
                        <Form.Control
                            type="date"
                            onChange={e => handleSearch('contractUntil', e)}
                            data-test="contract-input-control"
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="playerDateOfBirth"
                        data-test="DOB-input">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            onChange={e => handleSearch('dateOfBirth', e)}
                            data-test="DOB-input-control"
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};

SearchForm.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

export default SearchForm;
