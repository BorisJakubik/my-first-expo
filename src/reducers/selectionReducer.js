import { SELECT_LIBRARY } from '../actions/actionTypes';

export default (initialState = null, action) => {
    if (action.type === SELECT_LIBRARY) {
        return action.payload;
    }
    return initialState;
};
