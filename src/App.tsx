import { StatusBar } from "expo-status-bar";
import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { CustomDarkTheme } from "@app/themes/theme";
import { JWTProvider } from "@contexts/JWTContext";

import Routes from "@routes/index";

import reducer from "@store/reducer";

const store = createStore(reducer);

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={CustomDarkTheme}>
          <JWTProvider>
            <SafeAreaProvider>
              <Routes />
              {/* <StatusBar style="auto" /> */}
            </SafeAreaProvider>
          </JWTProvider>
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
