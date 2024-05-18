import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Acessar from '../../screens/Acesso';
import SignUpPage from '../../screens/Cadastro';

const Stack = createStackNavigator();

export default function AnonScreens(props) {
    const { login } = props;

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Acessar} initialParams={{ login }} options={{ headerShown: false }}/>
            <Stack.Screen name="Cadastro" component={SignUpPage} />
        </Stack.Navigator>
    );
};