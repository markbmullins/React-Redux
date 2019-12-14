import { format, compareAsc } from 'date-fns';

// Splits date in YYYY-MM-DD format into array and creates Date object
const createDate = date => {
    const splitDate = date.split('-');
    return new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
};
export const formatDate = date => {
    if (date) {
        return format(createDate(date), 'MMM do, y');
    }
};

// Returns true if dates are equal, or false otherwise
export const compareDates = (date1, date2) => {
    const result = compareAsc(createDate(date1), createDate(date2));
    let comp;
    result === 0 ? (comp = true) : (comp = false);
    return comp;
};
