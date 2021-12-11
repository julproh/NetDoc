import { RestService } from "../../../services/rest-service";

const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

export interface ShowModalAction {
    type: typeof SHOW_MODAL;
}

export interface HideModalAction {
    type: typeof HIDE_MODAL;
}

const GET_INFO = 'GET_INFO';
const GET_INFO_REQUESTED = 'GET_INFO_REQUESTED';
const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
const GET_INFO_FAILURE = 'GET_INFO_FAILURE';

export interface GetInfoAction {
    type: typeof GET_INFO;
    service: RestService;
}

interface GetInfoRequestedAction {
    type: typeof GET_INFO_REQUESTED;
}

interface GetInfoSuccessAction {
    type: typeof GET_INFO_SUCCESS;
    payload: any;
}

interface GetInfoFailureAction {
    type: typeof GET_INFO_FAILURE;
    payload: string;
}

export type HeaderActionTypes =
    | ShowModalAction
    | HideModalAction
    | GetInfoRequestedAction
    | GetInfoSuccessAction
    | GetInfoFailureAction;

const showModal = (): ShowModalAction => ({
    type: SHOW_MODAL
});

const hideModal = (): HideModalAction => ({
    type: HIDE_MODAL
});

const getInfo = (service: RestService) => (): GetInfoAction => ({
    type: GET_INFO,
    service
});

const getInfoRequested = (): HeaderActionTypes => ({
    type: GET_INFO_REQUESTED
});

const getInfoSuccess = (data: any): HeaderActionTypes => ({
    type: GET_INFO_SUCCESS,
    payload: data
});

const getInfoFailure = (error: string): HeaderActionTypes => ({
    type: GET_INFO_FAILURE,
    payload: error
});

export {
    SHOW_MODAL,
    HIDE_MODAL,
    GET_INFO,
    GET_INFO_REQUESTED,
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE,
    showModal,
    hideModal,
    getInfo,
    getInfoRequested,
    getInfoSuccess,
    getInfoFailure
};
