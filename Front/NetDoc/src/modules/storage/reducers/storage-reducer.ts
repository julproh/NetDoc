import {
    SHOW_MODAL,
    HIDE_MODAL,
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE,
    GET_INFO_REQUESTED,
    StorageActionTypes
} from '../actions/storage-actions';

export interface StorageState {
    modalIsVisible: boolean;
    infoLoading: boolean;
    infos: any;
    error: string;
}

const initialState: StorageState = {
    error: "",
    modalIsVisible: false,
    infos: [],
    infoLoading: false
};

const storageReducer = (
  state = initialState,
  action: StorageActionTypes
) => {
  switch (action.type) {
      case SHOW_MODAL:
          return {
              ...state,
              modalIsVisible: true
          };
      case HIDE_MODAL: {
          return {
              ...state,
              modalIsVisible: false
          };
      }
      case GET_INFO_SUCCESS: {
        return {
            ...state,
            infos: action.payload,
            infoLoading: false
          };
      }
      case GET_INFO_REQUESTED: {
        return {
            ...state,
            infoLoading: true
          };
      }
      case GET_INFO_FAILURE: {
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

export default storageReducer;