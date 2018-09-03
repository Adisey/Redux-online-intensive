/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 28.08.2018
 * Time: 16:58
 */
// Core
import { Map } from "immutable";
// Reducer
import { uiReducer } from "../reducer";
// Actions
import { uiActions } from "../actions";

const initalState = Map({
    isFetching: false,
    isOnline:   false,
});

describe("Редюсер UI:", () => {
    test("Возврат состояния по умолчанию", () => {
        expect(uiReducer(void 0, {})).toEqual(initalState);
    });

    test("Возврат состояния START_FETCHING", () => {
        expect(uiReducer(void 0, uiActions.startFetching())).toEqual(
            initalState.set("isFetching", true)
        );
    });

    test("Возврат состояния STOP_FETCHING", () => {
        expect(uiReducer(void 0, uiActions.stopFetching())).toEqual(
            initalState.set("isFetching", false)
        );
    });

    test("Возврат состояния SET_ONLINE_STATE", () => {
        expect(uiReducer(void 0, uiActions.setOnlineState())).toEqual(
            initalState.set("isOnline", true)
        );
    });

    test("Возврат состояния SET_OFFLINE_STATE", () => {
        expect(uiReducer(void 0, uiActions.setOfflineState())).toEqual(
            initalState.set("isOnline", false)
        );
    });
});

describe("Редюсер UI Snapshot:", () => {
    test("Возврат состояния по умолчанию Snapshot", () => {
        expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
    });

    test("Возврат состояния START_FETCHING Snapshot", () => {
        expect(uiReducer(void 0, uiActions.startFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": true,
  "isOnline": false,
}
`);
    });

    test("Возврат состояния STOP_FETCHING Snapshot", () => {
        expect(uiReducer(void 0, uiActions.stopFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
    });

    test("Возврат состояния SET_ONLINE_STATE Snapshot", () => {
        expect(uiReducer(void 0, uiActions.setOnlineState()))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": true,
}
`);
    });

    test("Возврат состояния SET_OFFLINE_STATE Snapshot", () => {
        expect(uiReducer(void 0, uiActions.setOfflineState()))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
    });
});
