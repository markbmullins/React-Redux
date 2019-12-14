import { format, compareAsc } from 'date-fns';

// creates Date object from date string in YYYY-MM-DD format
const createDate = date => {
    const tz = 'GMT-5:00';
    return new Date(date + tz);
};

export const formatDate = date => {
    if (date) {
        return format(createDate(date), 'MMM do, y');
    }
};

// Returns true if dates are equal, or false otherwise
export const compareDates = (date1, date2) => {
    if (compareAsc(createDate(date1), createDate(date2)) === 0) return true;
    return false;
};
