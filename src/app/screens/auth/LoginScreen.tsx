import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";

import { useTheme } from "react-native-paper";

import Container from "@components/Container";
import InputText from "@components/InputText";
import Button from "@components/Button";
import InputIcon from "@components/InputIcon";

import { CustomDarkTheme } from "@app/themes/theme";

const LoginScreen = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <View style={styles.container}>
        <InputText
          onChangeText={(value) => console.log(value)}
          placeholder={"Email"}
        />
        <InputIcon
          onChangeText={(value) => console.log(value)}
          placeholder={"Senha"}
          isSecure
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => alert("ForgotPasswordScreen")}>
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={() => console.log("ok")}
          color={colors.primary}
          title={"Login"}
        />
      </View>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: 650,
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
