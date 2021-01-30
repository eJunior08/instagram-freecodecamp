import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Register" onPress={() => navigate("Register")} />
      <Button title="Login" onPress={() => navigate("Login")} />
    </View>
  );
};

export default Auth;
