import axios from 'axios'

export const GET_POSTS_START = "GET_POSTS_START"
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"
export const GET_POSTS_FAIL = "GET_POSTS_FAIL"
export const POST_TO_POSTS_START = "POST_TO_POSTS_START"
export const POST_TO_POSTS_SUCCESS = "POST_TO_POSTS_SUCCESS"
export const POST_TO_POSTS_FAIL = "POST_TO_POSTS_FAIL"
export const POST_COMMENT_START = "POST_COMMENT_START"
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS"
export const POST_COMMENT_FAIL = "POST_COMMENT_FAIL"
export const GET_POST_START = "GET_POST_START"
export const GET_POST_SUCCESS = "GET_POST_SUCCESS"
export const GET_POST_FAIL = "GET_POST_FAIL"
export const GET_COMMENTS_START = "GET_COMMENTS_START"
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS"
export const GET_COMMENTS_FAIL = "GET_COMMENTS_FAIL"
export const DELETE_POST_START = "DELETE_POST_START"
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
export const DELETE_POST_FAIL = "DELETE_POST_FAIL"
export const PUT_POST_START = "PUT_POST_START"
export const PUT_POST_SUCCESS = "PUT_POST_SUCCESS"
export const PUT_POST_FAIL = "PUT_POST_FAIL"

const baseURL = "localhost:8000/api"

export const getPosts = _ => dispatch =>
{
    dispatch({ type: GET_POSTS_START })

    axios
        .get(`baseURL/posts`)
            .then(res =>
                {
                    console.log("res from getPosts:", res)
                    dispatch({ type: GET_POSTS_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from getPosts:", err)
                    dispatch({ type: GET_POSTS_FAIL, payload: err })
                })
}

export const getPost = id => dispatch =>
{
    dispatch({ type: GET_POST_START })

    axios
        .get(`baseURL/posts/${id}`)
            .then(res =>
                {
                    console.log("res from getPost:", res)
                    dispatch({ type: GET_POST_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from getPost:", err)
                    dispatch({ type: GET_POST_FAIL, payload: err })
                })
}

export const getComments = id => dispatch =>
{
    dispatch({ type: GET_COMMENTS_START })

    axios
        .get(`baseURL/posts/${id}/comments`)
            .then(res =>
                {
                    console.log("res from getComments:", res)
                    dispatch({ type: GET_COMMENTS_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from getComments:", err)
                    dispatch({ type: GET_COMMENTS_FAIL, payload: err })
                })
}

export const postPost = post => dispatch =>
{
    dispatch({ type: POST_TO_POSTS_START })

    axios
        .post(`baseURL/posts`, post)
            .then(res =>
                {
                    console.log("res from postPost:", res)
                    dispatch({ type: POST_TO_POSTS_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from postPost:", err)
                    dispatch({ type: POST_TO_POSTS_FAIL, payload: err })
                })
}

export const postComment = (comment, postID) => dispatch =>
{
    dispatch({ type: POST_COMMENT_START })

    axios
        .post(`baseURL/posts/${postID}/comments`, comment)
            .then(res =>
                {
                    console.log("res from postComment:", res)
                    dispatch({ type: POST_COMMENT_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from postComment:", err)
                    dispatch({ type: POST_COMMENT_FAIL, payload: err })
                })
}

export const deletePost = id => dispatch =>
{
    dispatch({ type: DELETE_POST_START })

    axios
        .delete(`baseURL/posts/id`)
            .then(res =>
                {
                    console.log("res from deletePost:", res)
                    dispatch({ type: DELETE_POST_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from deletePost:", err)
                    dispatch({ type: DELETE_POST_FAIL, payload: err })
                })
}

export const putPost = (post, id) => dispatch =>
{
    dispatch({ type: PUT_POST_START })

    axios
        .post(`baseURL/posts/id`, post)
            .then(res =>
                {
                    console.log("res from putPost:", res)
                    dispatch({ type: PUT_POST_SUCCESS, payload: res })
                })
            .catch(err =>
                {
                    console.log("err from putPost:", err)
                    dispatch({ type: PUT_POST_FAIL, payload: err })
                })
}