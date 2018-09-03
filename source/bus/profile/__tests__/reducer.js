/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 28.08.2018
 * Time: 17:51
 */
// Core
import { Map } from "immutable";
// Reducer
import { profileReducer } from "../reducer";
// Actions
import { profileActions } from "../actions";

const initalState = Map({
    id:        "",
    firstName: "",
    lastName:  "",
    avatar:    "",
    token:     "",
});

describe("Редюсер Profile:", () => {
    test("Возврат состояния по умолчанию", () => {
        expect(profileReducer(void 0, {})).toEqual(initalState);
    });

    test("Возврат состояния по умолчанию Snapshot", () => {
        expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "token": "",
}
`);
    });

    test("Возврат состояния FILL_PROFILE", () => {
        expect(
            profileReducer(void 0, profileActions.fillProfile(__.userProfile))
        ).toEqual(Map(__.userProfile));
    });

    test("Возврат состояния FILL_PROFILE Snapshot", () => {
        expect(profileReducer(void 0, profileActions.fillProfile(__.userProfile)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
    });

    test("Возврат состояния UPDATE_AVATAR Snapshot", () => {
        expect(profileReducer(void 0, profileActions.updateAvatar(__.url)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "https://www.url.com",
  "token": "",
}
`);
    });

    test("Возврат состояния UPDATE_AVATAR", () => {
        expect(
            profileReducer(void 0, profileActions.updateAvatar(__.newAvatarUrl))
        ).toEqual(Map(initalState).set("avatar", __.newAvatarUrl));
    });

    test("Возврат состояния CLEAR_PROFILE Snapshot", () => {
        expect(
            profileReducer(void 0, profileActions.clearProfile())
        ).toMatchInlineSnapshot(`Immutable.Map {}`);
    });

    test("Возврат состояния CLEAR_PROFILE", () => {
        expect(
            profileReducer(void 0, profileActions.clearProfile(__.userProfile))
        ).toEqual(Map({}));
    });
});
