import { combineReducers } from 'redux';
import comicsReucer from './comicsReducer';

export default combineReducers({
    comics: comicsReucer
});