/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.08.2018
 * Time: 17:49
 */

import { type } from "./types";

// Instruments
// import { api } from '../../REST/';

export const postsActions ={
    // Sync
    fillPosts: (posts) => {
        return {
            type:    type.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:    type.CREATE_POST,
            payload: post,
        };
    },
    clearPosts: () => {
        return {
            type: type.CLEAR_POSTS,
        };
    },
    removePost: (postId) => {
        return {
            type:    type.REMOVE_POST,
            payload: postId,
        };

    },
    // Async
    fetchPostsAsync: (posts) => {
        return {
            type:    type.FETCH_POSTS_ASYNC,
            payload: posts,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    type.CREATE_POST_ASYNC,
            payload: comment,
        };

    },
    removePostAsync: (postId) => {
        return {
            type:    type.REMOVE_POST_ASYNC,
            payload: postId,
        };

    },
};
