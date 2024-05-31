import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Acessar from "../../screens/Acesso";
import SignUpPage from "../../screens/Cadastro";

const Stack = createStackNavigator();

export default function AnonScreens(props) {
  const { login } = props;

  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: "#F15156",
          elevation: 0,
          shadowOpacity: 0
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Acessar}
        initialParams={{ login }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={SignUpPage}
        headerShadowVisible={false}
      />
    </Stack.Navigator>
  );
}
