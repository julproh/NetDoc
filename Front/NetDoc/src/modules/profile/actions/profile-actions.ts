import { RestService } from "../../../services/rest-service";
import {UserInfo} from "../types";


const GET_USER_INFO_BY_ID = 'GET_USER_INFO_BY_ID';
const GET_USER_INFO_BY_ID_REQUESTED = 'GET_USER_INFO_BY_ID_REQUESTED';
const GET_USER_INFO_BY_ID_SUCCESS = 'GET_USER_INFO_BY_ID_SUCCESS';
const GET_USER_INFO_BY_ID_FAILURE = 'GET_USER_INFO_BY_ID_FAILURE';


export interface GetUserInfoByIdAction{
    type: typeof GET_USER_INFO_BY_ID;
    service: RestService;
}

interface GetUserInfoByIdRequestedAction {
    type: typeof GET_USER_INFO_BY_ID_REQUESTED;
}

interface GetUserInfoByIdSuccessAction {
    type: typeof GET_USER_INFO_BY_ID_SUCCESS;
    payload: any;
}

interface GetUserInfoByIdFailureAction {
    type: typeof GET_USER_INFO_BY_ID_FAILURE;
    payload: string;
}
export type ProfileActionTypes =
    | GetUserInfoByIdRequestedAction
    | GetUserInfoByIdSuccessAction
    | GetUserInfoByIdFailureAction
    | PutUserInfoByIdRequestedAction
    | PutUserInfoByIdSuccessAction
    | PutUserInfoByIdFailureAction;


const  getUserInfoById = (service: RestService) => (): GetUserInfoByIdAction => ({
    type: GET_USER_INFO_BY_ID,
    service
});

const getUserInfoByIdRequested = (): ProfileActionTypes => ({
    type: GET_USER_INFO_BY_ID_REQUESTED
});

const getUserInfoByIdSuccess = (data: any): ProfileActionTypes => ({
    type: GET_USER_INFO_BY_ID_SUCCESS,
    payload: data
});

const getUserInfoByIdFailure = (error: string): ProfileActionTypes => ({
    type: GET_USER_INFO_BY_ID_FAILURE,
    payload: error
})

const PUT_USER_INFO_BY_ID = 'PUT_USER_INFO_BY_ID';
const PUT_USER_INFO_BY_ID_REQUESTED = 'PUT_USER_INFO_BY_ID_REQUESTED';
const PUT_USER_INFO_BY_ID_SUCCESS = 'PUT_USER_INFO_BY_ID_SUCCESS';
const PUT_USER_INFO_BY_ID_FAILURE = 'PUT_USER_INFO_BY_ID_FAILURE';

export interface PutUserInfoByIdAction{
    type: typeof PUT_USER_INFO_BY_ID;
    service: RestService;
    payload: UserInfo;
}

interface PutUserInfoByIdRequestedAction {
    type: typeof PUT_USER_INFO_BY_ID_REQUESTED;
}

interface PutUserInfoByIdSuccessAction {
    type: typeof PUT_USER_INFO_BY_ID_SUCCESS;
}

interface PutUserInfoByIdFailureAction {
    type: typeof PUT_USER_INFO_BY_ID_FAILURE;
    payload: string;
}

const  putUserInfoById = (service: RestService) => (userInfo: UserInfo): PutUserInfoByIdAction => ({
    type: PUT_USER_INFO_BY_ID,
    service,
    payload: userInfo
});

const putUserInfoByIdRequested = (): ProfileActionTypes => ({
    type: PUT_USER_INFO_BY_ID_REQUESTED
});

const putUserInfoByIdSuccess = (): ProfileActionTypes => ({
    type: PUT_USER_INFO_BY_ID_SUCCESS,
});

const putUserInfoByIdFailure = (error: string): ProfileActionTypes => ({
    type: PUT_USER_INFO_BY_ID_FAILURE,
    payload: error
})
export {
    GET_USER_INFO_BY_ID,
    GET_USER_INFO_BY_ID_REQUESTED,
    GET_USER_INFO_BY_ID_SUCCESS,
    GET_USER_INFO_BY_ID_FAILURE,
    getUserInfoById,
    getUserInfoByIdFailure,
    getUserInfoByIdRequested,
    getUserInfoByIdSuccess,
    PUT_USER_INFO_BY_ID,
    PUT_USER_INFO_BY_ID_REQUESTED,
    PUT_USER_INFO_BY_ID_FAILURE,
    PUT_USER_INFO_BY_ID_SUCCESS,
    putUserInfoById,
    putUserInfoByIdRequested,
    putUserInfoByIdFailure,
    putUserInfoByIdSuccess
};
