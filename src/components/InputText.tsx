import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
  placeholderTextColor?: string;
}

const InputText: React.FC<Props> = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({});
