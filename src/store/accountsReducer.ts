import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT } from "./actions";

export const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

const accountsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN: {
      const { isLoggedIn, user } = action.payload;
      return {
        ...state,
        isLoggedIn: isLoggedIn,
        user: user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountsReducer;
