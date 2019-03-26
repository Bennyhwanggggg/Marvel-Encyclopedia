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
            return action.payload.data;
        case GET_COMIC:
            return action.payload.data;
        case GET_COMIC_CHARACTERS:
            return action.payload.data;
        case GET_COMIC_CREATORS:
            return action.payload.data;
        case GET_COMIC_EVENTS:
            return action.payload.data;
        case GET_COMIC_STORIES:
            return action.payload.data;    
        default:
            return state;
    }
  };