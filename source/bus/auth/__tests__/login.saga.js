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
import { login } from "../saga/workers";
import { notificationActions } from "../../notification/actions";

describe(`LogIn Saga (redux-saga-test-plan)`, () => {
    test(`Проверка сценария с ответом сервера статусом 200`, async () => {
        await expectSaga(login, __.credentials)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.login, [__.credentials]), __.fetchResponseSuccess]])
            // .apply(localStorage, localStorage.setItem, ['remember', true])
            // .apply(localStorage, localStorage.setItem, ['token', __.token])
            // .put(profileActions.fillProfile(__.userProfile))
            // .put(actions.change('forms.user.profile.firstName', __.userProfile.firstName))
            // .put(actions.change('forms.user.profile.lastName', __.userProfile.lastName))
            // .put(authAction.authenticate())

            .put(uiActions.stopFetching())
            .run();
    });

    test(`Проверка сценария с ответом сервера статусом 400`, async () => {
        await expectSaga(login, __.credentials)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.login), __.fetchResponseFail400]])
            // .put(uiActions.emitError(__.error, 'Login worker failed'))

            .put(uiActions.stopFetching())
            .run();
    });

});
