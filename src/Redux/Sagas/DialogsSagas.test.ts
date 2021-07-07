import { call,put } from 'redux-saga/effects'
import {fetchShowMessages} from "./DialogsSagas"
import assert from "assert";
import {DialogsApi} from "../../Api/Api";

const iterator = fetchShowMessages({id: '2', page: '4', type: "FETCH_SHOW_MESSAGE"})

test('First test saga', () => {
    assert.deepStrictEqual(
        iterator.next().value,
        call(DialogsApi.GetUserDialog, '2', '4'),
        "should yield an Effect call(DialogsApi.GetUserDialog, '2', '4')"
    )
    assert.deepStrictEqual(
        iterator.next().value,
        put({page: 4, type: "SET_CURRENT_MESSAGE_PAGE"}),
        "should yield an Effect put({}, '4')"
    )
})


