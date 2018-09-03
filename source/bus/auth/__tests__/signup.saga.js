/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 03.09.2018
 * Time: 21:02
 */
// Core
import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

import { api } from "../../../REST";
import { authAction } from "../../auth/actions";
import { uiActions } from "../../ui/actions";
import { signup } from "../saga/workers";

const signupAction = authAction.signupAsync(__.userProfile);
const saga = cloneableGenerator(signup)(signupAction);
let clone = null;

describe(" Signup Saga Worker", () => {
    describe("До запроса к серверу", () => {
        test(`Должен запуститься экшен "StartFetching"`, () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });

        test(`Должен запуститься fetch запрос"`, () => {
            expect(saga.next().value).toEqual(
                apply(api, api.auth.signup, [__.userProfile])
            );
            clone = saga.clone();
        });
    });

    describe("Ответ сервера статусом 400", () => {
        test(`Fetch запрос вернул статус 400`, () => {
            expect(clone.next(__.fetchResponseFail400).value).toEqual(
                apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
            );
        });

        test(`Получение ответа с объектом ошибки `, () => {
            expect(clone.next(__.responseDataFail).value).toEqual(
                put(uiActions.emitError(__.error, "signup fetchUsers"))
            );
        });

        test(`Должен запуститься экшен "StopFetching"`, () => {
            expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
        });

        test(`Последний шаг генератора`, () => {
            expect(clone.next().done).toBe(true);
        });
    });

    describe("Ответ сервера успешным статусом 200", () => {
        test(`Fetch запрос вернул статус 200`, () => {
            expect(saga.next(__.fetchResponseSuccess).value).toEqual(
                apply(__.fetchResponseSuccess, __.fetchResponseSuccess.json)
            );
        });

        test(`Проверяем єкшен "fillProfile"`, () => {
            expect(saga.next(__.responseDataSuccess).value).toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "payload": Object {
        "avatar": "TEST_AVATAR",
        "firstName": "Walter",
        "id": "TEST_ID",
        "lastName": "White",
        "token": "TEST_TOKEN",
      },
      "type": "FILL_PROFILE",
    },
    "channel": null,
  },
}
`);
        });

        test(`Проверяем єкшен "authenticate"`, () => {
            expect(saga.next().value).toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "type": "AUTHENTICATE",
    },
    "channel": null,
  },
}
`);
        });

        test(`Должен запуститься экшен "StopFetching"`, () => {
            expect(saga.next().value).toEqual(put(uiActions.stopFetching()));
        });

        test(`Последний шаг генератора`, () => {
            expect(saga.next().done).toBe(true);
        });

    });
});
