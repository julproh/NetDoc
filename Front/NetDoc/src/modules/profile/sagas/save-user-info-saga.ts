import {
    PUT_USER_INFO_BY_ID,
    PutUserInfoByIdAction,
    putUserInfoByIdFailure,
    putUserInfoByIdRequested,
    putUserInfoByIdSuccess
} from "../actions/profile-actions";
import {call, put, takeEvery} from "redux-saga/effects";
import {ResponseGenerator} from "./get-user-info-saga";

function* fetchPutInfoAsync(action: PutUserInfoByIdAction) {
    console.log('fetchPutInfoAsync');
    const { service, payload } = action;

    try {
        yield put(putUserInfoByIdRequested());
        const response: ResponseGenerator = yield call(() =>
            service.putUserInfoById(payload)
        );
        console.log(response);
        yield put(putUserInfoByIdSuccess());
    } catch ({ error }) {
        yield put(putUserInfoByIdFailure(error as string));
    }
}


export function* saveUserInfoWatcher() {
    console.log('saveUserInfoWatcher');
    yield takeEvery(PUT_USER_INFO_BY_ID, fetchPutInfoAsync)
}