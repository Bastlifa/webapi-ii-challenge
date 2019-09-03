import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
    POST_TO_POSTS_START,
    POST_TO_POSTS_SUCCESS,
    POST_TO_POSTS_FAIL,
    POST_COMMENT_START,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAIL,
    GET_POST_START,
    GET_POST_SUCCESS,
    GET_POST_FAIL,
    GET_COMMENTS_START,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
    PUT_POST_START,
    PUT_POST_SUCCESS,
    PUT_POST_FAIL,
} from '../actions'

const initialState = 
{
    error: "",
    posts: [],
    singlePost: {},
    isLoading: false,
}

export const reducer = (state = initialState, action) =>
{
    switch(action.payload)
    {
        case GET_POSTS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload.data,
                error: "",
            }
        case GET_POSTS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case GET_POST_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                singlePost: action.payload.data,
                error: "",
            }
        case GET_POST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case POST_TO_POSTS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            }
        case POST_TO_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, action.payload.data],
                error: "",
            }
        case POST_TO_POSTS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}