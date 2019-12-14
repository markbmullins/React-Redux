import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../redux/reducers';
import { middleWares } from '../../redux/configureStore';

/**
 * Finds element in component by data-test attribute
 * @param {Object} cmp reference to component
 * @param {String} attr data-test value to search for
 */
export const findByDataTest = (cmp, attr) => {
    return cmp.find(`[data-test='${attr}']`);
};

export const checkProps = (cmp, expectedProps) => {
    return checkPropTypes(cmp.propTypes, expectedProps, 'props', cmp.name);
};

export const testStore = initialState => {
    const createStoreWithMiddleware = applyMiddleware(...middleWares)(
        createStore
    );
    return createStoreWithMiddleware(rootReducer, initialState);
};
