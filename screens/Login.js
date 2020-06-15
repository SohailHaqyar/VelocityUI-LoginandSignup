import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Input, Button, Block, Text } from "../components";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { height } = Dimensions.get("window");
class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block center middle>
        <Block middle>
          <Text color="blue"> Logo </Text>
        </Block>

        <Block flex={2.5} center>
          <Text h3 style={{ marginBottom: 6 }}>
            Sign in to Velocity
          </Text>
          <Text paragraph color="black3">
            Please enter your credentials to proceed.
          </Text>
          <Block center style={{ marginTop: 44 }}>
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1 }}
              keyboardVerticalOffset={35}
              enabled
            >
              <Input
                full
                email
                style={{ marginBottom: 25 }}
                label="Email Address"
              />
              <Input
                full
                style={{ marginBottom: 25 }}
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
                <Text button>Sign in</Text>
              </Button>
              <Text paragraph color="gray">
                Don't Have an account ?{" "}
                <Text
                  onPress={() => navigation.navigate("Register")}
                  color="blue"
                  paragraph
                >
                  Sign up
                </Text>
              </Text>
            </KeyboardAvoidingView>
          </Block>
        </Block>
      </Block>
    );
  }
}

export default Login;
