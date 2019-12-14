import { shape, number, string } from 'prop-types';

export const player = shape({
    jerseyNumber: number.isRequired,
    name: string.isRequired,
    position: string.isRequired,
    nationality: string.isRequired,
    contractUntil: string.isRequired,
    dateOfBirth: string.isRequired
});
