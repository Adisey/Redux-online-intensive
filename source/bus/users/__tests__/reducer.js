/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 28.08.2018
 * Time: 0:31
 */

// Core
import { List, Map } from 'immutable';

// Reducer
import { usersReducer } from '../reducer';

// Actions
import { usersActions } from '../actions';
import { authReducer } from "../../auth/reducer";

const initalState = Map({
    isAuthenticated: false,
    isInitialized:   false,
});

describe('Редюсер Users:', () => {
    test('Возврат состояния по умолчанию', () => {
        expect(authReducer(void 0, initalState))
            .toEqual(initalState);
    });

    test('Очистка CLEAR_USERS', () => {
        expect(usersReducer(void 0, usersActions.clearUsers(__.users)))
            .toEqual(List([]));
    });
    // ToDo: I do not like this.
    test('Получение FILL_USERS', () => {
        expect(usersReducer(void 0, usersActions.fillUsers(List(__.users))))
            .toEqual(List(__.users));
    });

});
