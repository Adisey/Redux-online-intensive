/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 05.08.2018
 * Time: 10:44
 */

//Core
import { all, call } from 'redux-saga/effects';

// Wathers
import { watcherPosts } from '../bus/posts/saga/watchers';
import { watchUsers } from '../bus/users/saga/watchers';
import { watchAuth } from '../bus/auth/saga/watchers';
import { watchProfile } from '../bus/profile/saga/watchers';

export function* rootSaga () {
    yield all([call(watcherPosts), call(watchUsers), call(watchAuth), call(watchProfile)]);
}
