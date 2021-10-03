import React from "react";
import { View, Text } from "react-native";

import AuthGuard from "./AuthGuard";

const AppRoutes: React.FC = () => {
  return (
    <AuthGuard>
      <View>
        <Text>User</Text>
      </View>
    </AuthGuard>
  );
};

export default AppRoutes;
