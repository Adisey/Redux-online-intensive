/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 27.08.2018
 * Time: 19:39
 */

// Actions
import { authAction } from '../actions';

// Types
import { type } from '../types';

describe('Экшены Аутернтификации:', () => {
    test('authenticate', () => {
        expect(authAction.authenticate()).toEqual({
            type: type.AUTHENTICATE,
        });
    });

    test('initialialze', () => {
        expect(authAction.initialialze()).toEqual({
            type: type.INITIALIZE,
        });
    });

    test('logout', () => {
        expect(authAction.logout()).toEqual({
            type: type.LOGOUT,
        });
    });

    test('signupAsync', () => {
        expect(authAction.signupAsync(__.userProfile)).toEqual({
            type:    type.SIGNUP_ASYNC,
            payload: __.userProfile,
        });
    });

    test('loginAsync', () => {
        expect(authAction.loginAsync(__.credentials)).toEqual({
            type:    type.LOGIN_ASYNC,
            payload: __.credentials,
        });
    });

    test('authenticateAsync', () => {
        expect(authAction.authenticateAsync()).toEqual({
            type: type.AUTHENTICATE_ASYNC,
        });
    });

    test('initializedAsync', () => {
        expect(authAction.initializedAsync()).toEqual({
            type: type.INITIALIZE_ASYNC,
        });
    });

    test('logoutAsync', () => {
        expect(authAction.logoutAsync()).toEqual({
            type: type.LOGOUT_ASYNC,
        });
    });



});
