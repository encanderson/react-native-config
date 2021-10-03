import { StyleSheet, Platform } from "react-native";

import { CustomDarkTheme } from "@assets/themes/theme";

export const styles = StyleSheet.create({
  containerAuth: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 600,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },
  forgotPassword: {
    width: "90%",
    alignItems: "flex-end",
    marginBottom: 10,
    marginTop: 10,
  },
  label: {
    color: CustomDarkTheme.colors.text,
  },
});
