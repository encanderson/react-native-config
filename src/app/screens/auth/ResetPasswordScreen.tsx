import React from "react";
import { View } from "react-native";

import { useTheme } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Container from "@components/Container";
import InputIcon from "@components/InputIcon";
import Button from "@components/Button";

import { RootStackParamList } from "@app/stacks/types";
import { styles } from "@assets/styles/styles";

type Props = NativeStackScreenProps<RootStackParamList>;

const ResetPasswordScreen = ({ navigation }: Props) => {
  // TODO - password strength
  const { colors } = useTheme();
  return (
    <Container>
      <View style={styles.containerAuth}>
        <InputIcon
          onChangeText={(value) => console.log(value)}
          placeholder={"Nova Senha"}
          isSecure
        />
        <InputIcon
          onChangeText={(value) => console.log(value)}
          placeholder={"Confirmar Senha"}
          isSecure
        />
        <Button
          onPress={() => navigation.navigate("LoginScreen")}
          color={colors.primary}
          title={"Salvar"}
        />
      </View>
    </Container>
  );
};

export default ResetPasswordScreen;
