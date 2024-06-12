import { GluestackUIProvider, SafeAreaView } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { config } from '../config/gluestack-ui.config';
import AnonScreens from './components/tabs/anonScreens';
import TabNavigator from "./components/tabs/loggedScreens";
import Toast from "react-native-toast-message";

export default function AppContainer() {
    const [logado, setLogado] = React.useState();
    const [emailLogado, setEmailLogado] = React.useState();
    const emailFunc = (email) => setEmailLogado(email);
    const getEmail = () => emailLogado;
    const login = () => setLogado(true);
    const logout = () => setLogado(false);

    return (
        <>
            <GluestackUIProvider config={config}>
                <SafeAreaView flex={1} style={{ fontStyle: "Roboto_100Thin" }}>
                    <NavigationContainer>
                        <StatusBar style="auto" />
                        {logado && emailLogado != null
                         ? <TabNavigator logout={logout} getEmail={getEmail} />
                          : <AnonScreens login={login} emailFunc={emailFunc} />}
                    </NavigationContainer>
                </SafeAreaView>
            </GluestackUIProvider>
            <Toast />
        </>
    )
}