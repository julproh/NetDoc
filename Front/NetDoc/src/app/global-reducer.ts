import { combineReducers } from 'redux';
import storageModuleReducer from '../modules/storage/reducers';
import profileModuleReducer from "../modules/profile/reducer";
import headerModuleReducer from "../modules/header/reducer";

const netDocReducer = combineReducers({
    storageReducer: storageModuleReducer,
    profileReducer: profileModuleReducer,
    headerReducer: headerModuleReducer,
});

export default netDocReducer;