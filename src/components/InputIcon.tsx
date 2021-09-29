import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { CustomDarkTheme } from "@app/themes/theme";

interface Props {
  editable?: boolean;
  input?: string | null;
  placeholder?: string;
  isSecure?: boolean;
  value?: string;
  keyboardType?: "numeric";
  onChangeText(value: string): void;
  style?: Object;
  placeholderColor?: string;
}

const InputIcon: React.FC<Props> = (props) => {
  const [eye, setEye] = useState({
    eye: "eye-slash",
    isSecure: true,
  });

  function handlerButton() {
    if (eye.eye == "eye") {
      setEye({
        eye: "eye-slash",
        isSecure: true,
      });
    } else if (eye.eye == "eye-slash") {
      setEye({
        eye: "eye",
        isSecure: false,
      });
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={CustomDarkTheme.colors.placeholder}
        secureTextEntry={eye.isSecure}
        style={[styles.input, props.style, { flex: 1 }]}
        editable={props.editable}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
      >
        {props.input}
      </TextInput>
      <TouchableOpacity onPress={() => handlerButton()}>
        <Icon name={eye.eye} size={20} color={CustomDarkTheme.colors.error} />
      </TouchableOpacity>
    </View>
  );
};

export default InputIcon;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: CustomDarkTheme.colors.surface,
    borderRadius: 10,
    marginTop: 5,
    width: "90%",
    paddingRight: 10,
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
