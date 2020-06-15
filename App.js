import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import Auth from "./navigation/Auth";
import Screens from "./navigation/Screens";
const Stack = createStackNavigator();
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Auth />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
