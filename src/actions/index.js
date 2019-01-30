import { SELECT_LIBRARY } from './actionTypes';

export const selectLibrary = (id) => {
    return {
        type: SELECT_LIBRARY,
        payload: id
    };
};
