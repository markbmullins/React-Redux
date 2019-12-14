import checkPropTypes from 'check-prop-types';

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
