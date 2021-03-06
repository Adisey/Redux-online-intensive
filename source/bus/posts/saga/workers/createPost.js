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
import { notificationActions } from "../../../notification/actions";

export function* createPost ({ payload: comment }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.create, [comment]);
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.createPost(post));
        yield put(notificationActions.showNotification('Пост отправлен!'));

    } catch (error) {
        yield put(uiActions.emitError(error, 'createPost fetchUsers'));
        yield put(notificationActions.showNotification(
            'Проблема с отправеой поста!',
            'error',
            'createPost worker'
        ),
        );

    } finally {
        yield put(uiActions.stopFetching());

    }
}
