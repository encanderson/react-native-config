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

const ForgotPasswordScreen = ({ navigation }: Props) => {
  const { colors } = useTheme();
  return (
    <Container>
      <View style={styles.containerAuth}>
        <InputText
          onChangeText={(value) => console.log(value)}
          placeholder={"Email"}
        />
        <Button
          onPress={() => navigation.navigate("VerifyCodeScreen")}
          color={colors.primary}
          title={"Enviar"}
        />
      </View>
    </Container>
  );
};

export default ForgotPasswordScreen;
