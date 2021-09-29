import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme } from "react-native-paper";

interface Props {
  style?: Object;
}

const Container: React.FC<Props> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        borderColor: colors.background,
      }}
      behavior="padding"
      enabled
    >
      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 60 }}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
