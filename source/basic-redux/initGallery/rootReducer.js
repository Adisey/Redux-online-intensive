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

import { gallaryReducer } from '../bus/gallery/reducer';

export const rootReducer = combineReducers({
    gallery: gallaryReducer,
});
