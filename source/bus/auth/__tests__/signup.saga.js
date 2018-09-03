/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.09.2018
 * Time: 21:02
 */
// Core
import { put, apply } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { api } from '../../../REST';
import { authAction } from '../../auth/actions';
import { uiActions } from '../../ui/actions';
import { signup } from '../saga/workers';

const signupAction = authAction.signupAsync(__.userProfile);
const saga = cloneableGenerator(signup)();
let clone = null;



