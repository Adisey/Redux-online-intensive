/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 28.08.2018
 * Time: 17:10
 */

// Actions
import { uiActions } from '../actions';

// Types
import { type } from '../types';

describe('Экшены UI:', () => {
    test('startFetching', () => {
        expect(uiActions.startFetching())
            .toEqual({
                type: type.START_FETCHING,
            });
    });

    test('stopFetching', () => {
        expect(uiActions.stopFetching())
            .toEqual({
                type: type.STOP_FETCHING,
            });
    });

    test('setOnlineState', () => {
        expect(uiActions.setOnlineState())
            .toEqual({
                type: type.SET_ONLINE_STATE,
            });
    });

    test('setOfflineState', () => {
        expect(uiActions.setOfflineState())
            .toEqual({
                type: type.SET_OFFLINE_STATE,
            });
    });

    test('emitError', () => {
        expect(uiActions.emitError(__.error, __.errorMessage))
            .toEqual({
                type:    type.EMIT_ERROR,
                payload: __.error,
                meta:    __.errorMessage,
            });
    });

    test('emitError - meta=null', () => {
        expect(uiActions.emitError(__.error))
            .toEqual({
                type:    type.EMIT_ERROR,
                payload: __.error,
                meta:    null,
            });
    });
});

describe('Экшены UI Snapshot:', () => {
    test('startFetching Snapshot', () => {
        expect(uiActions.startFetching())
            .toMatchSnapshot();
    });

    test('stopFetching Snapshot', () => {
        expect(uiActions.stopFetching())
            .toMatchSnapshot();
    });

    test('setOnlineState Snapshot', () => {
        expect(uiActions.setOnlineState())
            .toMatchSnapshot();
    });

    test('setOfflineState Snapshot', () => {
        expect(uiActions.setOfflineState())
            .toMatchSnapshot();
    });

    test('emitError Snapshot', () => {
        expect(uiActions.emitError(__.error, __.errorMessage))
            .toMatchSnapshot();
    });

    test('emitError - meta=null Snapshot', () => {
        expect(uiActions.emitError(__.error))
            .toMatchSnapshot();
    });
});

