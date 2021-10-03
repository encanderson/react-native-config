import { ReactChild, ReactChildren } from "react";

export interface ChildProps {
  children: ReactChild | ReactChildren;
}

export interface ChildNode {
  children: React.ReactElement;
}

export interface ReduxProps {
  account: {
    isLoggedIn: boolean;
    isInitialized: boolean;
    user: null;
  };
}

export type RootDrawerParamList = {
  TabScreens: undefined;
};