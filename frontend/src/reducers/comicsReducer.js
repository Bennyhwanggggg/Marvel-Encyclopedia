import _ from 'lodash';
import { 
    GET_COMICS, 
    GET_COMIC, 
    GET_COMIC_CHARACTERS,
    GET_COMIC_CREATORS,
    GET_COMIC_EVENTS, 
    GET_COMIC_STORIES
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_COMICS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case GET_COMIC:
            return { ...state, [action.payload.id]: action.payload };
        case GET_COMIC_CHARACTERS:
            return { ...state, [action.payload.id]: action.payload };
        case GET_COMIC_CREATORS:
            return { ...state, [action.payload.id]: action.payload };
        case GET_COMIC_EVENTS:
            return { ...state, [action.payload.id]: action.payload };
        case GET_COMIC_STORIES:
            return { ...state, [action.payload.id]: action.payload };    
        default:
            return state;
    }
  };