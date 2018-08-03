/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 31.07.2018
 * Time: 17:01
 */

// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

// Reducer
import { rootReducer } from './rootRedicer';

const logger = createLogger({
    duration: true,
    collapse: true,
    colors:   {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#FF0005',
    },
});

const preloadedState = JSON.parse(localStorage.getItem('gallery'));

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
const enhancedStore =  composeEnhancers(applyMiddleware(logger));

export const store = createStore(rootReducer, enhancedStore);