import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchForm = ({ handleSearch }) => {
    return (
        <div className="form">
            <Form>
                <Form.Row>
                    <Form.Group controlId="playerName">
                        <Form.Label>Player Name</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Enter Name..."
                            onChange={e => handleSearch('name', e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="playerPosition">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Enter Position..."
                            onChange={e => handleSearch('position', e)}
                        />
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

export default SearchForm;
