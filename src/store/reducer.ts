import { combineReducers } from "redux";

import accountsReducer from "./accountsReducer";

const reducer = combineReducers({
    account: accountsReducer,
});

export default reducer;