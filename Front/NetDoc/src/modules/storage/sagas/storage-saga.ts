import {put, takeEvery, call} from "redux-saga/effects"
import {
    getInfoRequested,
    getInfoSuccess,
    getInfoFailure,
    GET_INFO,
    GetInfoAction
} from '../actions/storage-actions';

export interface ResponseGenerator{
    [propName: string]: any;
}

function* fetchGetInfoAsync(action: GetInfoAction) {
    const { service } = action;
    try {
        yield put(getInfoRequested());
        const response: ResponseGenerator = yield call(() =>
            service.getInfo()
        );
        yield put(getInfoSuccess(response));
    } catch ({ error }) {
        yield put(getInfoFailure(error as string));
    }
}

export function* storageWatcher() {
    yield takeEvery(GET_INFO, fetchGetInfoAsync)
}