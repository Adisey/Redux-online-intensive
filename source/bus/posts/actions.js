/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.08.2018
 * Time: 17:49
 */

import {
    FETCH_POSTS_ASYNC,
    FILL_POSTS,
    ADD_POST,
    CREATE_POST_ASYNC
} from "./types";

// Instruments
import { api } from '../../REST/';

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch ({
        type: FETCH_POSTS_ASYNC,
    });
    const response = await api.posts.fetch ();
    const result = await response.json ();

    dispatch (fillPosts (result.data));
};

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post,
    };
};

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch ({
        type: CREATE_POST_ASYNC,
    });
    const response = await api.posts.create (comment);
    const result = await response.json ();

    dispatch (addPost (result.data));
};




