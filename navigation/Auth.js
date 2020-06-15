import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Forgot from "../screens/Forget";

const AuthStack = createStackNavigator();

export default function Auth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerTitle: null,
        headerTransparent: true,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Forgot" component={Forgot} />
    </AuthStack.Navigator>
  );
}
