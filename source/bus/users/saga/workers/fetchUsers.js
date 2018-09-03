// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from "../../../../REST";
import { uiActions } from '../../../ui/actions';
import { usersActions } from '../../../users/actions';

export function* fetchUsers () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.users.fetch);
        const { data: users, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(usersActions.fillUsers(users));
        console.log(`users ->`, users);
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchUsers updateName'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
