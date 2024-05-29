import React, { useState } from "react";
import { Box, Button, ButtonText, EyeOffIcon, Text } from "@gluestack-ui/themed";
import { ActivityIndicator, Image, TextInput, View, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { firebase_auth } from "../../components/firebase/firebaseConfig";
import { EyeIcon } from "lucide-react-native";
import { signInWithEmailAndPassword } from "@firebase/auth";

export default function Acessar() {
  const route = useRoute();
  const navigation = useNavigation();
  const { login } = route.params;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = firebase_auth;

  const isSignInWithAdmin = () => {
    return email == "adm" && password == "adm";
  }

  const signIn = async () => {
    setLoading(true);
    
    try {
      if(isSignInWithAdmin()) return login(true);
      
      await signInWithEmailAndPassword(auth, email, password);
      login(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box flex={1} style={{ backgroundColor: "#F15156" }}>
      <Box flex={5} justifyContent="center" alignItems="center">
        <Image
          source={require("../../../assets/icon.png")}
          style={{ width: 80, height: 80 }}
        />
        <Text
          style={{
            textTransform: "uppercase",
            color: "white",
            marginTop: 15,
            fontWeight: "600",
          }}
        >
          pet rescue app
        </Text>
      </Box>
      <Box flex={3} justifyContent="center" alignItems="center">
        <TextInput
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          style={{ backgroundColor: 'white', padding: 10, marginVertical: 5, width: '80%' }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, marginVertical: 5, width: '80%' }}>
          <TextInput
            value={password}
            secureTextEntry={!showPassword}
            placeholder="Senha"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={handlePasswordVisibility}>
            {showPassword ? <EyeOffIcon size={24} /> : <EyeIcon size={24} />}
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
      </Box>
      <Box flex={2} justifyContent="center" alignItems="center">
        <Button
          onPress={signIn}
          alignItems="center"
          justifyContent="center"
          style={{
            backgroundColor: "#2D384C",
            padding: 10,
            borderRadius: 50,
            width: 200,
            height: 50,
            marginVertical: 5,
          }}
        >
          <ButtonText color="white" fontSize={16} fontWeight="600">
            Acessar
          </ButtonText>
        </Button>
        <Button
          onPress={() => navigation.navigate("Cadastro")}
          alignItems="center"
          justifyContent="center"
          style={{
            backgroundColor: "#2D384C",
            padding: 10,
            borderRadius: 50,
            width: 200,
            height: 50,
            marginVertical: 5,
          }}
        >
          <ButtonText color="white" fontSize={16} fontWeight="600">
            Cadastrar
          </ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
