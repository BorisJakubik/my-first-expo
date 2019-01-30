import { combineReducers } from 'redux';
import LiberaryReducer from './libraryReducer';
import SelectionReducer from './selectionReducer';

export default combineReducers({
    libraries: LiberaryReducer,
    selected: SelectionReducer,
});
