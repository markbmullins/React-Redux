import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as playerActions from './redux/actions/playerActions';
import * as searchActions from './redux/actions/searchActions';
import './App.scss';
import PlayerTable from './components/PlayerTable';
import { playerSelector, filteredPlayersSelector } from './redux/selectors';
import { formatDate } from './utils/dateUtils';
import SearchForm from './components/SearchForm';

function App(props) {
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
                return null;
        }
    };

    return (
        <div className="App">
            <div className="page-content">
                <h1 className="title">Football Player Finder</h1>
                <div className="form-container">
                    <SearchForm handleSearch={handleSearch} />
                </div>
                <div className="table-container">
                    <div className="player-table">
                        <PlayerTable
                            players={props.filtered}
                            format={formatDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        players: playerSelector(state),
        filtered: filteredPlayersSelector(state)
    };
}

export default connect(mapStateToProps)(App);
