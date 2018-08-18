/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 11:31
 */

// Core
import { put, apply, select } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* unLikePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            throw new Error(message);
        }

        const liker = yield select((state) => {
            // return state.profile.remove('avatar').remove('token'); // Аналогичен следующей строке.
            return state.profile.removeAll(['avatar', 'token']);
        });

        yield put(postsActions.unLikePost({ userId: liker.get('id'), postId }));
    } catch (error) {
        yield put(uiActions.emitError(error, 'unLikePost fetchUsers'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
