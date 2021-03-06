import { GET_STORE_CATEGORIES_FULFILLED } from '../actions/getStoreCategories.js';

const INITIAL_STATE = { all: [],post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_STORE_CATEGORIES_FULFILLED:
            return {...state, all: action.payload.data}
        default:
            return state;
    }
}