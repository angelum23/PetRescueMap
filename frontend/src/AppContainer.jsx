import React from 'react'
import { config } from '../config/gluestack-ui.config';
import { GluestackUIProvider, SafeAreaView } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import Acessar from './screens/Acesso/index';
import TabNavigator from "./components/tabs";

export default function AppContainer() {
    const [logado, setLogado] = React.useState();
    const login = () => setLogado(true);
    const logout = () => setLogado(false);

    return (
        <GluestackUIProvider config={config}>
            <SafeAreaView flex={1} style={{ fontStyle: "Roboto_100Thin" }}>
                <NavigationContainer>
                    <StatusBar style="auto" />
                    {logado ? <TabNavigator /> : <Acessar login={login}/>}
                </NavigationContainer>
            </SafeAreaView>
        </GluestackUIProvider>
    )
}