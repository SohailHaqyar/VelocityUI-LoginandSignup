import React, { Component } from "react";
import { Input, Button, Block, Text } from "../components";
import { MaterialIcons } from "@expo/vector-icons";
import {
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import * as theme from "../constants/theme";

class Register extends Component {
  state = {
    active: null,
  };
  handleType = (id) => {
    const { active } = this.state;
    this.setState({ active: active === id ? null : id });
  };
  render() {
    const { navigation } = this.props;
    const { active } = this.state;
    return (
      <ScrollView>
        <Block center middle style={{ marginTop: 80 }}>
          <Block center>
            <Text h3 style={{ marginBottom: 6 }}>
              Get started for free
            </Text>
            <Text paragraph color="black3">
              Free forever. No credit cards needed.
            </Text>
            <Block
              row
              style={{
                marginHorizontal: 28,
                marginTop: 10,
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => this.handleType("administartor")}
              >
                <Block
                  center
                  space="evenly"
                  style={[
                    styles.card,
                    { marginHorizontal: 20, marginTop: 10 },
                    active === "administartor" ? styles.active : null,
                  ]}
                >
                  <MaterialIcons
                    name="flash-on"
                    color={theme.colors.blue}
                    size={26}
                    style={styles.icon}
                  />
                  <Text style={{ marginBottom: 10 }} weight="bold" h4>
                    Administrator
                  </Text>
                  <Text center paragraph color="black3">
                    Full Access to all settings
                  </Text>
                </Block>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => this.handleType("operator")}
              >
                <Block
                  center
                  space="evenly"
                  style={[
                    styles.card,
                    { marginTop: 10 },
                    active === "operator" ? styles.active : null,
                  ]}
                >
                  <MaterialIcons
                    name="chat"
                    color={theme.colors.blue}
                    size={26}
                    style={styles.icon}
                  />
                  <Text h4 weight="bold" style={{ marginBottom: 10 }}>
                    Operator
                  </Text>
                  <Text center paragraph color="black3">
                    Service desk and chat permissions
                  </Text>
                </Block>
              </TouchableWithoutFeedback>
            </Block>
            <Block center style={{ marginTop: 20 }}>
              <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={85}
              >
                <Input full style={{ marginBottom: 20 }} label="Full Name" />
                <Input
                  full
                  email
                  style={{ marginBottom: 20 }}
                  label="Email Address"
                />
                <Input
                  full
                  style={{ marginBottom: 20 }}
                  label="Password"
                  right={
                    <Text
                      onPress={() => navigation.navigate("Forgot")}
                      paragraph
                      color="gray"
                    >
                      Forgot Password
                    </Text>
                  }
                  password
                />
                <Button
                  active
                  full
                  onPress={() => navigation.navigate("Overview")}
                  style={{ marginBottom: 12 }}
                >
                  <Text button>Create Account</Text>
                </Button>
                <Text paragraph color="gray">
                  Already Have an account ?{" "}
                  <Text
                    onPress={() => navigation.navigate("Login")}
                    color="blue"
                    paragraph
                  >
                    Sign in
                  </Text>
                </Text>
              </KeyboardAvoidingView>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 20,
    borderRadius: 5,
    height: 170,
  },
  active: {
    borderColor: theme.colors.blue,
  },
  icon: {
    padding: 10,
    backgroundColor: theme.colors.border,
    marginBottom: 10,
    borderRadius: 28,
  },
});
export default Register;
