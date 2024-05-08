import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Conta from "../../screens/Conta";
import Home from "../../screens/Home";
import Mapa from "../../screens/Mapa";
import { SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {    
    const {logout} = props; //todo Angelo: criar context pra pegar o logout de dentro do componente conta

    const getOptions = (name, iconName) => ({
            title: name,
            tabBarIcon: ({color, size}) => <SimpleLineIcons name={iconName} size={size} color={color} />,
        }
    )

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={getOptions("Home", "home")}
            />
            <Tab.Screen
                name="Conta"
                component={Conta}
                options={getOptions("Conta", "user")}
            />
            <Tab.Screen
                name="Mapa"
                component={Mapa}
                options={getOptions("Mapa", "map")}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;