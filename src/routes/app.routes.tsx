import React from "react";

import AuthGuard from "./AuthGuard";

import TabScreens from "@app/screens/tabs";

const AppRoutes: React.FC = () => {
  return (
    <AuthGuard>
      <TabScreens />
    </AuthGuard>
  );
};

export default AppRoutes;
