/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 27.08.2018
 * Time: 23:56
 */

// Core
import { createStore, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Reducers
import { authReducer as auth } from '../../bus/auth/reducer';
import { postsReducer as posts } from '../../bus/posts/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';
import { usersReducer as users } from '../../bus/users/reducer';
import { formsReducer as forms } from '../../bus/forms/reducer';
import { notificationReducer as notification } from '../../bus/notification/reducer';

import { store } from '../store';

export const referenceRootReducer = combineReducers({
    auth,
    forms,
    notification,
    posts,
    profile,
    router,
    users,
    ui,
});

const referenceStore = createStore(referenceRootReducer);

describe('Store:', () => {
    test('Актуальное состояние Store', () => {
        expect(store.getState())
            .toEqual(referenceStore.getState());
    });
});
