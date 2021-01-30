import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Auth from "./src/pages/Auth";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Auth">
        <Screen name="Auth" component={Auth} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}
