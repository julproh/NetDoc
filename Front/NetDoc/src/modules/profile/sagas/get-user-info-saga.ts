import {put, takeEvery, call} from "redux-saga/effects"
import {
    getUserInfoByIdRequested,
    getUserInfoByIdSuccess,
    getUserInfoByIdFailure,
    GET_USER_INFO_BY_ID,
    GetUserInfoByIdAction,

} from '../actions/profile-actions';

export interface ResponseGenerator{
    [propName: string]: any;
}



function* fetchGetInfoAsync(action: GetUserInfoByIdAction) {
    console.log('fetchPuyInfoAsync');
    const { service } = action;
    try {
        yield put(getUserInfoByIdRequested());
        const response: ResponseGenerator = yield call(() =>
            service.getUserInfoById()
        );
        console.log(response);
        yield put(getUserInfoByIdSuccess(response));
    } catch ({ error }) {
        yield put(getUserInfoByIdFailure(error as string));
    }
}

export function* getUserInfoWatcher() {
    console.log('getUserInfoWatcher');
    yield takeEvery(GET_USER_INFO_BY_ID, fetchGetInfoAsync);
}