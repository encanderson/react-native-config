import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChildProps, ReduxProps } from "@utils/types";

import { LOGIN } from "@store/actions";

interface AuthContext {
  isLoggedIn: boolean;
  isInitialized: boolean;
  user: null;
  login(data: { username: string; password: string }): Promise<void>;
  logout(): Promise<void>;
}

export const JWTContext = createContext<AuthContext>({} as AuthContext);

export const JWTProvider = ({ children }: ChildProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: ReduxProps) => state.account);

  const [initialState, setinitialState] = React.useState(state);

  const login = async (data: { username: string; password: string }) => {
    if (data.username === "enganderson" && data.password === "123456") {
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: true,
          user: {
            name: "Anderson",
          },
        },
      });
    } else {
      console.log("not");
    }
  };

  React.useEffect(() => {
    const init = async () => {
      setinitialState(state);
    };
    init();
  }, [state]);

  const logout = async () => {
    console.log("logout");
  };
  return (
    <JWTContext.Provider
      value={{
        ...initialState,
        login,
        logout,
      }}
    >
      {children}
    </JWTContext.Provider>
  );
};
