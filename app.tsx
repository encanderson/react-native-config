import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  Provider as PaperProvider,
  DarkTheme,
  useTheme,
  withTheme,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { CustomDarkTheme } from "@assets/themes/theme";

const Login: React.FC = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Login</Text>
    </View>
  );
};

const switchNavigator = createSwitchNavigator({
  Login: Login,
});

function App() {
  return (
    <PaperProvider theme={CustomDarkTheme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Login />
          {/* <StatusBar style="auto" /> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CustomDarkTheme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
