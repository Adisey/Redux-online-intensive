/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.08.2018
 * Time: 17:49
 */

import { FETCH_POSTS_ASYNC, FILL_POSTS} from "./types";
// ToDo: Спросить у Димы Зачем это масло масленное

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => {
    return {
        type: FETCH_POSTS_ASYNC,
    };
};




