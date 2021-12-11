import { all } from "redux-saga/effects"
import  storageWatcher  from "../modules/storage/sagas";
import {getUserInfoWatcher} from "../modules/profile/sagas";
import {saveUserInfoWatcher} from "../modules/profile/sagas";
import headerWatcher from "../modules/header/sagas";

export function* globalWatcher() {
    yield all([storageWatcher(), getUserInfoWatcher(),saveUserInfoWatcher(), headerWatcher()])
}