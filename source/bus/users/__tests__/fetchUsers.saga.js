/**
 * Created by PhpStorm
 * Project p501-redux-online-intensive
 * User: Adisey
 * Date: 04.09.2018
 * Time: 0:03
 */
// Core
import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

// Instruments
import { api } from "../../../REST";
import { uiActions } from "../../ui/actions";
import { usersActions } from "../../users/actions";
import { fetchUsers } from "../saga/workers";

const fetchUsersActions = usersActions.fetchUsersAsync();
const saga = cloneableGenerator(fetchUsers)(fetchUsersActions);
let clone = null;

describe(`FetchUsers Saga Worker`, () => {
    describe("До запроса к серверу", () => {
        test(`Должен запуститься экшен "StartFetching"`, () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });

        test(`Должен запуститься fetch запрос"`, () => {
            expect(saga.next().value).toEqual(apply(api, api.users.fetch, []));
            // ToDo: Мне не понятно почему я проверниваю к пустому массиву
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
                put(uiActions.emitError(__.error, "fetchUsers updateName"))
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
            expect(saga.next(__.fetchResponseSuccessUsers).value).toEqual(
                apply(__.fetchResponseSuccessUsers, __.fetchResponseSuccessUsers.json)
            );
        });

        test(`Проверяем єкшен "fillUsers"`, () => {
            expect(saga.next(__.responseDataSuccessUsers).value)
                .toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "payload": Array [
        Object {
          "avatar": "USER1_AVATAR",
          "firstName": "USER1_firstName",
          "id": "USER1_ID",
          "lastName": "USER1_lastName",
        },
        Object {
          "avatar": "USER2_AVATAR",
          "firstName": "USER2_firstName",
          "id": "USER2_ID",
          "lastName": "USER2_lastName",
        },
      ],
      "type": "FILL_USERS",
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
