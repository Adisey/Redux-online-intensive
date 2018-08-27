/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 27.08.2018
 * Time: 23:27
 */
// Core
import { Map } from 'immutable';

// Reducer
import { authReducer } from '../reducer';

// Actions
import { authAction } from '../actions';

const initalState = Map({
    isAuthenticated: false,
    isInitialized:   false,
});

describe('Редюсер аутентификации:', () => {
    test('Возврат состояния по умолчанию', () => {
        expect(authReducer(void 0, {}))
            .toEqual(initalState);
    });

    test('Возврат состояния AUTHENTICATE', () => {
        expect(authReducer(void 0, authAction.authenticate()))
            .toEqual(initalState.set('isAuthenticated', true));
    });

    test('Возврат состояния INITIALIZE', () => {
        expect(authReducer(void 0, authAction.initialialze()))
            .toEqual(initalState.set('isInitialized', true));
    });

    test('Возврат состояния LOGOUT', () => {
        expect(authReducer(void 0, authAction.logout()))
            .toEqual(initalState.set('isAuthenticated', false));
    });
});
