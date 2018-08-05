/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 11:29
 */

// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { createPost, fillPosts } from './workers';

function* watcherFillPosts () {
    yield takeEvery(type.FETCH_POSTS_ASYNC, fillPosts);
}
function* watcherCratePost () {
    yield takeEvery(type.CREATE_POST_ASYNC, createPost);
}
export function* watcherPosts () {
    yield all([call(watcherCratePost), call(watcherFillPosts)]);
}
