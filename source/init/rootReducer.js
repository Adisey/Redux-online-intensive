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

import { postsReducer as posts} from '../bus/posts/reducer';

export const rootReducer = combineReducers({
    posts,
});
