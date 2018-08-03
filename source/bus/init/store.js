/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 31.07.2018
 * Time: 17:01
 */

// Core
import { createStore} from 'redux';

// Reducer
import { rootReducer } from './rootRedicer';

// Middleware
import  { enhancedStore }  from './middleware/core';


export const store = createStore(rootReducer, enhancedStore);