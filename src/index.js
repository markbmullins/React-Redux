import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
