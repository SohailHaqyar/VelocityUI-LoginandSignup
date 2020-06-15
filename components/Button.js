import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import * as theme from "../constants/theme";

const { width } = Dimensions.get("window");
const Button = ({ full, opacity, style, children, ...props }) => {
  const buttonStyles = [styles.button, full && styles.full, style];
  return (
    <TouchableOpacity
      activeOpacity={opacity || 0.8}
      style={buttonStyles}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.blue,
    borderRadius: 4,
    height: 55,
    paddingVertical: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  full: {
    width: width - 50,
  },
});
export default Button;
