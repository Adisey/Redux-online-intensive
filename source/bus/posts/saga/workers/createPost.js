/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 11:31
 */

// Core
import { put, apply } from 'redux-saga/effects';

import { api } from "../../../../REST";
import { createPost as createPostAC } from '../../actions';

export function* createPost({ payload: comment}) {
    const response = yield apply (api, api.posts.create, [comment]);
    const result = yield apply (response, response.json);

    yield put(createPostAC (result.data));
}