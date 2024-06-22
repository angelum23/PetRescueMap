import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Conta from "../../screens/Conta";
import Home from "../../screens/Home";
import Mapa from "../../screens/Mapa";
import CadastroAnimais from "../../screens/CadastroAnimais";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  const { logout } = props;

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
        initialParams={{ logout }}
        options={getOptions("Conta", "account")}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
