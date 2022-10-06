import { combineReducers } from 'redux';
import user_info from './user_info';

const rootReducer = combineReducers({
    user: user_info
});

export default rootReducer;
