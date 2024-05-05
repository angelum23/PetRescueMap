import { GluestackUIProvider, SafeAreaView } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import Acessar from './screens/Acesso/index';
import TabNavigator from "./components/tabs";

export default function AppContainer() {
    return (
        <GluestackUIProvider>
            <SafeAreaView flex={1} style={{ fontStyle: "Roboto_100Thin" }}>
                <NavigationContainer>
                    <StatusBar style="auto" />
                    <Acessar />
                    <TabNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </GluestackUIProvider>
    )
}