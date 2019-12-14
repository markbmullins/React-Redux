import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { player } from '../propTypes';

const PlayerTable = ({ players, format }) => {
    if (!players || !Array.isArray(players)) return <div>loading...</div>;

    return (
        <Table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Position</th>
                    <th>Nationality</th>
                    <th>Jersey Number</th>
                    <th>Contract Until</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => {
                    return (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>{player.nationality}</td>
                            <td>{player.jerseyNumber}</td>
                            <td>{format(player.contractUntil)}</td>
                            <td>{format(player.dateOfBirth)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

PlayerTable.propTypes = {
    players: PropTypes.arrayOf(player).isRequired,
    format: PropTypes.func.isRequired
};
export default PlayerTable;
