import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Input, Button, Block, Text } from "../components";
const styles = StyleSheet.create({
  forget: {
    flex: 1,
  },
});
class Forget extends Component {
  render() {
    return (
      <Block center middle style={styles.forget}>
        <Text> Forget </Text>
      </Block>
    );
  }
}

export default Forget;
