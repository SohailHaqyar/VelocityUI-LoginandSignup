import React from "react";
import { View, StyleSheet } from "react-native";

const Block = ({
  flex,
  center,
  row,
  middle,
  space,
  style,
  children,
  ...props
}) => {
  const blockStyles = [
    styles.block,
    flex && { flex },
    space && { justifyContent: `space-${space}` },
    center && styles.center,
    middle && styles.middle,
    row && styles.row,
    style,
  ];
  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  middle: {
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
  },
});
export default Block;
