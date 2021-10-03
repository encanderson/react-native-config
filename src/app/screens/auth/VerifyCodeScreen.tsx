import React from "react";
import { View } from "react-native";

import { useTheme } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Container from "@components/Container";
import InputText from "@components/InputText";
import Button from "@components/Button";

import { RootStackParamList } from "@app/stacks/types";
import { styles } from "@assets/styles/styles";

type Props = NativeStackScreenProps<RootStackParamList>;

const VerifyCodeScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();
  return (
    <Container>
      <View style={styles.containerAuth}>
        <InputText
          onChangeText={(value) => console.log(value)}
          placeholder={"Código"}
          maxLength={6}
          keyboardType={"numeric"}
        />
        <Button
          onPress={() => navigation.navigate("ResetPasswordScreen")}
          title={"Confirmar"}
          color={colors.primary}
        />
      </View>
    </Container>
  );
};

export default VerifyCodeScreen;
