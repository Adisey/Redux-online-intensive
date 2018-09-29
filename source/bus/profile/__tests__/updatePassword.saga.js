
// Core
import { put, apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

// Instruments
import { api } from "../../../REST";
import { uiActions } from '../../ui/actions';
import { profileActions } from '../../profile/actions';
import { notificationActions } from "../../notification/actions";
import { updatePassword } from '../saga/workers';

describe(`updatePassword Saga (redux-saga-test-plan)`, () => {
    test(`Проверка сценария с ответом сервера статусом 200`, async () => {
        await expectSaga(updatePassword, __.newPassword)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.profile.updateProfile, [__.newPassword]), __.fetchResponseSuccess]])
            .put(profileActions.fillProfile(__.userProfile))

            .put(uiActions.stopFetching())
            .run();
    });

    // test(`Проверка сценария с ответом сервера статусом 400`, async () => {
    //     await expectSaga(login, __.credentials)
    //         .put(uiActions.startFetching())
    //         .provide([[apply(api, api.auth.login), __.fetchResponseFail400]])
    //         // .put(uiActions.emitError(__.error, 'Login worker failed'))
    //
    //         .put(uiActions.stopFetching())
    //         .run();
    // });
    //
});
