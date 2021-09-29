import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import { CustomDarkTheme } from "@app/themes/theme";

interface Props {
  editable?: boolean;
  input?: string | null;
  title?: string;
  placeholder?: string;
  isSecure?: boolean;
  value?: string;
  keyboardType?: "numeric";
  onChangeText(value: string): void;
  style?: Object;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  styleContainer?: Object;
  textContentType?: string;
}

const InputText: React.FC<Props> = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={CustomDarkTheme.colors.placeholder}
        secureTextEntry={props.isSecure}
        editable={props.editable}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        maxLength={props.maxLength}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        style={styles.input}
      >
        {props.input}
      </TextInput>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    backgroundColor: CustomDarkTheme.colors.surface,
    color: CustomDarkTheme.colors.text,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});
