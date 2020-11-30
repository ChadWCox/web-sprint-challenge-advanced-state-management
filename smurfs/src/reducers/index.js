import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE,
} from '../actions'


const initialState = {
    isLoading: false,
    isPosting: false,
    smurfData: [],
    error: ''
    
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfData: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case POST_START:
            return {
                ...state,
                isPosting: true,
                error: ''
            };
        case POST_SUCCESS:
            return {
                ...state,
                isPosting: false,
                smurfData: action.payload
            };
        case POST_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
    default:
        return state
    }
    
};