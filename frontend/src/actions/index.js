import { 
    GET_COMICS, 
    GET_COMIC, 
    GET_COMIC_CHARACTERS,
    GET_COMIC_CREATORS,
    GET_COMIC_EVENTS, 
    GET_COMIC_STORIES
} from './types';
import marvel from '../apis/marvel';

// async using redux thunk
export const getComics = () => async (dispatch) => {
    const response = await marvel.get('/comics');
    dispatch({ type: GET_COMICS, payload: response.data });
};

export const getComic = (id) => async (dispatch) => {
    const response = await marvel.get(`/comics/${id}`);
    dispatch({ type: GET_COMIC, payload: response.data });
};

export const getComicCharacters = (id) => async dispatch => {
    const response = await marvel.get(`/comics/${id}/characters`);
    dispatch({ type: GET_COMIC_CHARACTERS, payload: response.data })
};

export const getComicCreators = (id) => async dispatch => {
    const response = await marvel.get(`/comics/${id}/creators`);
    dispatch({ type: GET_COMIC_CREATORS, payload: response.data })
};

export const getComicEvents = (id) => async dispatch => {
    const response = await marvel.get(`/comics/${id}/events`);
    dispatch({ type: GET_COMIC_EVENTS, payload: response.data })
};

export const getComicStories = (id) => async dispatch => {
    const response = await marvel.get(`/comics/${id}/stories`);
    dispatch({ type: GET_COMIC_STORIES, payload: response.data })
};