import React, { useState } from "react";
import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";
import { ActivityIndicator, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebase_auth } from "../../components/firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const SignUpPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = firebase_auth;

    const signUp = async () => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate("Login");
        } catch (error) {
            console.log("Sign Up Error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box flex={1} style={{ backgroundColor: "#F15156", alignItems: "center" }}>
            <Image source={require("../../../assets/icon.png")} style={{ width: 80, height: 80, marginTop: 50 }} />
            <Text style={{ textTransform: "uppercase", color: "white", marginTop: 15, fontWeight: "600" }}>
                Pet Rescue App
            </Text>
            <TextInput
                value={email}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                style={{ backgroundColor: 'white', padding: 10, marginVertical: 5, width: '80%' }}
            />
            <TextInput
                value={password}
                secureTextEntry={true}
                placeholder="Senha"
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                style={{ backgroundColor: 'white', padding: 10, marginVertical: 5, width: '80%' }}
            />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            <Button
                onPress={signUp}
                alignItems="center"
                justifyContent="center"
                style={{
                    backgroundColor: "#2D384C",
                    padding: 10,
                    borderRadius: 50,
                    width: 200,
                    height: 50,
                    marginVertical: 20,
                }}
            >
                <ButtonText color="white" fontSize={16} fontWeight="600">
                    Cadastrar
                </ButtonText>
            </Button>
        </Box>
    );
};

export default SignUpPage;
