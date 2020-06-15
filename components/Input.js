import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Text from "./Text";
import { Dimensions } from "react-native";
import * as theme from "../constants/theme";

const { width } = Dimensions.get("window");

const Input = ({
  email,
  right,
  password,
  number,
  phone,
  flex,
  label,
  full,
  style,
  ...props
}) => {
  const inputStyles = [styles.input, full && styles.full, style];
  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label} medium caption>
          {label}
        </Text>
        {right}
      </View>
      <TextInput
        style={inputStyles}
        {...props}
        keyboardType={inputType}
        secureTextEntry={password}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.input,
    borderWidth: 0.5,
    borderColor: theme.colors.border,
    borderRadius: 5,
    color: theme.colors.black,
    fontSize: theme.sizes.font,
    height: 45,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  label: {
    textTransform: "uppercase",
  },
  full: {
    width: width - 50,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
export default Input;
