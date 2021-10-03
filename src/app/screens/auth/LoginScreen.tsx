import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { useTheme } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Container from "@components/Container";
import InputText from "@components/InputText";
import Button from "@components/Button";
import InputIcon from "@components/InputIcon";

import { RootStackParamList } from "@app/stacks/types";
import { styles } from "@assets/styles/styles";

type Props = NativeStackScreenProps<RootStackParamList>;

const LoginScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();

  return (
    <Container>
      <View style={styles.containerAuth}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            <Text style={styles.label}>Esqueceu a senha?</Text>
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
