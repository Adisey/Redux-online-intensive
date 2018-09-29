/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.09.2018
 * Time: 21:02
 */
// Core
import { apply } from "redux-saga/effects";
import { actions } from "react-redux-form";
import { expectSaga } from 'redux-saga-test-plan';

import { api } from "../../../REST";
import { authAction } from "../../auth/actions";
import { uiActions } from "../../ui/actions";
import { profileActions } from '../../profile/actions';
import { logout } from "../saga/workers";
import { postsActions } from "../../posts/actions";
import { replace } from "react-router-redux";
import { usersActions } from "../../users/actions";
import { book } from "../../../navigation/book";
import { notificationActions } from "../../notification/actions";

describe(`LogOut Saga (redux-saga-test-plan)`, () => {
    test(`Проверка сценария с ответом сервера статусом 204`, async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseSuccess204]])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .put(profileActions.clearProfile())
            .put(postsActions.clearPosts())
            .put(usersActions.clearUsers())
            .put(uiActions.stopFetching())
            .put(actions.reset('forms.user'))
            .put(authAction.logout())
            .put(replace(book.login))
            .run();
    });
    test(`Проверка сценария с ответом сервера статусом НЕ 204`, async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseFail400]])
            .put(uiActions.emitError(__.error, 'Logout worker error'))
            // .put(notificationActions.showNotification('Приходите ещё!'))
            .apply(localStorage, localStorage.removeItem, ['token'])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .put(profileActions.clearProfile())
            .put(postsActions.clearPosts())
            .put(usersActions.clearUsers())
            .put(uiActions.stopFetching())
            .put(actions.reset('forms.user'))
            .put(authAction.logout())
            .put(replace(book.login))
            .run();
    });
});
