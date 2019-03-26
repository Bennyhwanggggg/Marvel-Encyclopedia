import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import comicsReucer from './comicsReducer';

export default combineReducers({
    form: formReducer,
    comics: comicsReucer
});