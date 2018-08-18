/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 11:31
 */

// Core
import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* removePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.remove, [postId]);

        if (response.status !== 204) {
            throw new Error(message);
        }
        yield put(postsActions.removePost(postId));
    } catch (error) {
        yield put(uiActions.emitError(error, 'removePost fetchUsers'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
