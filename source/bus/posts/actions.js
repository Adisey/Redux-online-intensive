/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.08.2018
 * Time: 17:49
 */

import { type } from "./types";

// Instruments
import { api } from '../../REST/';

export const postsActions ={
    fillPosts: (posts) => {
        return {
            type:    type.FILL_POSTS,
            payload: posts,
        };
    },
    fetchPostsAsync: () => async (dispatch) => {
        dispatch({
            type: type.FETCH_POSTS_ASYNC,
        });
        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postsActions.fillPosts(result.data));
    },
    createPost: (post) => {
        return {
            type:    type.CREATE_POST,
            payload: post,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    type.CREATE_POST_ASYNC,
            payload: comment,
        };

    },

};
