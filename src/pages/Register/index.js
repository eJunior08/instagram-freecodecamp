import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  function handleSignUp() {}

  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(name) => setForm(...form, name)}
      />
      <TextInput
        placeholder="email"
        onChangeText={(email) => setForm(...form, email)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setForm(...form, password)}
      />

      <Button title="Sign up" onPress={handleSignUp} />
    </View>
  );
};

export default Register;
