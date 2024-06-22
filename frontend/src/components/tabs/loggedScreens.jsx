import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Conta from "../../screens/Conta";
import Home from "../../screens/Home";
import Mapa from "../../screens/Mapa";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import CadastrarAnimais from "../../screens/CadastroAnimais";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ route }) => {
  const { logout, getEmail } = route.params;

  const getOptions = (name, iconName) => ({
    title: name,
    tabBarActiveTintColor: "#2D384C",
    tabBarInactiveTintColor: "white",
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name={iconName} size={size + 2} color={color} />
    ),
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#F15156",
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F15156" },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={getOptions("Home", "home")}
      />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={getOptions("Mapa", "map-marker-circle")}
      />
      <Tab.Screen
        name="Conta"
        component={Conta}
        initialParams={{ logout, getEmail }}
        options={getOptions("Conta", "account")}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = (props) => {
  const stack = createStackNavigator();
  const { logout, getEmail } = props;

  return (
    <stack.Navigator initialRouteName='Tabs' >
      <stack.Screen name="Tabs" component={TabNavigator} initialParams={{ logout, getEmail }} options={{ headerShown: false }} />
      <stack.Screen name="Cadastrar Animais" component={CadastrarAnimais} options={{headerTintColor: "#fff", headerStyle: {backgroundColor: "#F15156",}}} />
    </stack.Navigator>
  );
};

export default StackNavigator