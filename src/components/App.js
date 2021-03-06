import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as playerActions from '../redux/actions/playerActions';
import * as searchActions from '../redux/actions/searchActions';
import '../styles/App.scss';
import PlayerTable from './PlayerTable';
import { playerSelector, filteredPlayersSelector } from '../redux/selectors';
import { formatDate } from '../utils/dateUtils';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';
import { player } from '../propTypes';

const App = props => {
    const { dispatch } = props;

    useEffect(() => {
        dispatch(playerActions.loadPlayers());
    }, [dispatch]);

    const handleSearch = (field, event) => {
        switch (field) {
            case 'name':
                props.dispatch(
                    searchActions.searchPlayersByName(event.target.value)
                );
                break;
            case 'nationality':
                props.dispatch(
                    searchActions.searchPlayersByNationality(event.target.value)
                );
                break;
            case 'position':
                props.dispatch(
                    searchActions.searchPlayersByPosition(event.target.value)
                );
                break;
            case 'jersey':
                props.dispatch(
                    searchActions.searchPlayersByJersey(event.target.value)
                );
                break;
            case 'contractUntil':
                props.dispatch(
                    searchActions.searchPlayersByContractUntil(
                        event.target.value
                    )
                );
                break;
            case 'dateOfBirth':
                props.dispatch(
                    searchActions.searchPlayersByDateOfBirth(event.target.value)
                );
                break;
            default:
                return;
        }
    };

    return (
        <div className="App" data-test="app">
            <div className="page-content">
                <h1 className="title" data-test="title">
                    Football Player Finder
                </h1>
                <div className="form-container" data-test="search-form">
                    <SearchForm handleSearch={handleSearch} />
                </div>
                <div className="table-container">
                    <div className="player-table" data-test="player-table">
                        <PlayerTable
                            players={props.filtered}
                            format={formatDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        players: playerSelector(state),
        filtered: filteredPlayersSelector(state)
    };
};

App.propTypes = {
    players: PropTypes.arrayOf(player).isRequired,
    filtered: PropTypes.arrayOf(player).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(App);
