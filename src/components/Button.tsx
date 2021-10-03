import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {
  title?: string;
  color?: string;
  onPress(): void;
  buttonSytle?: Object;
  disabled?: boolean;
}

const Button: React.FC<Props> = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        disabled={props.disabled}
        style={[
          styles.button,
          styles.buttonOutline,
          {
            backgroundColor: props.color,
          },
          props.buttonSytle,
        ]}
        onPress={props.onPress}
      >
        <View>
          <Text style={styles.buttonText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
