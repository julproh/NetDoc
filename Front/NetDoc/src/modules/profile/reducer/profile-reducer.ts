import {
    GET_USER_INFO_BY_ID_FAILURE,
    GET_USER_INFO_BY_ID_REQUESTED,
    GET_USER_INFO_BY_ID_SUCCESS,
    ProfileActionTypes,
    PUT_USER_INFO_BY_ID_FAILURE,
    PUT_USER_INFO_BY_ID_REQUESTED,
    PUT_USER_INFO_BY_ID_SUCCESS
} from '../actions/profile-actions';

export interface ProfileState {
    infoLoading: boolean;
    infos: any;
    error: string;
}

const initialState: ProfileState = {
    infos: {},
    error: "",
    infoLoading: false
};

const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
) => {
  switch (action.type) {
      case GET_USER_INFO_BY_ID_REQUESTED: {
          return {
              ...state,
              infoLoading: true
          };
      }
      case GET_USER_INFO_BY_ID_SUCCESS: {
          console.log(action.payload);
        return {
            ...state,
            infos: action.payload,
            infoLoading: false
          };
      }
      case GET_USER_INFO_BY_ID_FAILURE: {
        return {
            ...state,
            error: action.payload,
            infoLoading: false
          };
      }
      case PUT_USER_INFO_BY_ID_REQUESTED: {
          return {
              ...state,
              infoLoading: true

          };
      }
      case PUT_USER_INFO_BY_ID_SUCCESS: {
          return {
              ...state,
              infoLoading: false
          };
      }
      case PUT_USER_INFO_BY_ID_FAILURE: {
          return {
              ...state,
              error: action.payload,
              infoLoading: false
          };
      }
      default:
          return state;
    }
};

export default profileReducer;