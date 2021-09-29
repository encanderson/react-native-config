import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useTheme } from "react-native-paper";

import Container from "@components/Container";

const LoginScreen = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <View>
        <Text style={{ color: colors.text }}>Login</Text>
      </View>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
