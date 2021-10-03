import React from "react";

import AuthGuard from "./AuthGuard";

import TabScreens from "@app/screens/tabs";
import Drawer from "@app/screens/drawer";

const AppRoutes: React.FC = () => {
  return (
    <AuthGuard>
      <Drawer />
    </AuthGuard>
  );
};

export default AppRoutes;
