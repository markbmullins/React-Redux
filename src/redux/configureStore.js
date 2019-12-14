import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export const middleWares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middleWares)(
    createStore
);
// Can maybe remove compose?
export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleWares))
    );
}
