import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { CustomDarkTheme } from "@app/themes/theme";

import Routes from "@routes/index";

function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={CustomDarkTheme}>
        <SafeAreaProvider>
          <Routes />
          {/* <StatusBar style="auto" /> */}
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
