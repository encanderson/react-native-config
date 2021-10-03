import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "@app/screens/auth/LoginScreen";
import ForgotPasswordScreen from "@app/screens/auth/ForgotPasswordScreen";
import VerifyCodeScreen from "@app/screens/auth/VerifyCodeScreen";
import ResetPasswordScreen from "@app/screens/auth/ResetPasswordScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="VerifyCodeScreen"
        component={VerifyCodeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
