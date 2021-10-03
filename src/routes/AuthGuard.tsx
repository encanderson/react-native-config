import React from "react";
import { ChildNode } from "@utils/types";

import useAuth from "@hooks/useAuth";
import AuthRoutes from "./auth.routes";

const AuthGuard = ({ children }: ChildNode) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <AuthRoutes />;
  }

  return children;
};

export default AuthGuard;
