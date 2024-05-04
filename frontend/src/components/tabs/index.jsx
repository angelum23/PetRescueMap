import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Conta from "../../screens/Conta";
import Home from "../../screens/Home";
import Mapa from "../../screens/Mapa";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Conta"
                component={Conta}
            />
            <Tab.Screen
                name="Mapa"
                component={Mapa}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;