import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { player } from '../propTypes';

const PlayerTable = ({ players, format }) => {
    if (!players || !Array.isArray(players))
        return <div data-test="loading">loading...</div>;

    return (
        <Table data-test="player-table">
            <thead data-test="table-header">
                <tr>
                    <th data-test="header-item">Player</th>
                    <th data-test="header-item">Position</th>
                    <th data-test="header-item">Nationality</th>
                    <th data-test="header-item">Jersey Number</th>
                    <th data-test="header-item">Contract Until</th>
                    <th data-test="header-item">Date of Birth</th>
                </tr>
            </thead>
            <tbody data-test="table-body">
                {players.map((player, index) => {
                    return (
                        <tr data-test="table-row" key={index}>
                            <td data-test="name">{player.name}</td>
                            <td data-test="position">{player.position}</td>
                            <td data-test="nationality">
                                {player.nationality}
                            </td>
                            <td data-test="jerseyNumber">
                                {player.jerseyNumber}
                            </td>
                            <td data-test="contractUntil">
                                {format(player.contractUntil)}
                            </td>
                            <td data-test="dateOfBirth">
                                {format(player.dateOfBirth)}
                            </td>
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
