/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 20:31
 */

// Core
import { put, apply } from 'redux-saga/effects';

import { api } from "../../../../REST";
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fillPosts () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        console.log(`API -> response ->`, response);
        console.log(`API -> response.json 1->`, response.json);
        const { data: posts, message } = yield apply(response, response.json);
        console.log(`API -> response.json 2->`, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.fillPosts(posts));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fillPosts worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
