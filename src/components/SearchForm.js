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
            <Form>
                <Form.Row>
                    <Form.Group controlId="player-name">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Enter Name..."
                            onChange={e => handleSearch('name', e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="player-position">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={e => handleSearch('position', e)}>
                            <option></option>
                            {positionOptions.map((position, index) => (
                                <option key={index}>{position}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="playerNationality">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Enter Nationality..."
                            onChange={e => handleSearch('nationality', e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="playerJersey">
                        <Form.Label>Jersey Number</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Enter Jersey Number..."
                            onChange={e => handleSearch('jersey', e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="playerContractUntil">
                        <Form.Label>Contract Until</Form.Label>
                        <Form.Control
                            type="date"
                            onChange={e => handleSearch('contractUntil', e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="playerDateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            onChange={e => handleSearch('dateOfBirth', e)}
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
