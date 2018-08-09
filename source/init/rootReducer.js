/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 31.07.2018
 * Time: 16:56
 */

// Core
import { combineReducers } from 'redux';

// Reducers

import { postsReducer as posts } from '../bus/posts/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { authReducer as auth } from '../bus/auth/reducer';

export const rootReducer = combineReducers({
    auth,
    ui,
    posts,
});
