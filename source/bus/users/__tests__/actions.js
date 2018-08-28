/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 28.08.2018
 * Time: 0:31
 */
/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 27.08.2018
 * Time: 19:39
 */

// Actions
import { usersActions } from '../actions';

// Types
import { type } from '../types';

describe('Экшены Users:', () => {
    test('fetchUsersAsync', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: type.FETCH_USERS_ASYNC,
        });
    });

    test('clearUsers', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: type.CLEAR_USERS,
        });
    });

    test('fillUsers', () => {
        expect(usersActions.fillUsers(__.users)).toEqual({
            type: type.FILL_USERS,
            payload: __.users,
        });
    });



});
