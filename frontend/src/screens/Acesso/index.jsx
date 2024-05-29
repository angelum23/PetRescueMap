import { signInWithEmailAndPassword } from "@firebase/auth";
import {
  Box,
  Button,
  ButtonText,
  EyeOffIcon,
  Text,
} from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EyeIcon } from "lucide-react-native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { firebase_auth } from "../../components/firebase/firebaseConfig";

export default function Acessar() {
  const route = useRoute();
  const navigation = useNavigation();
  const { login } = route.params;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = firebase_auth;

  const signIn = async () => {
    setLoading(true);
    try {
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
    <Box
      flex={1}
      style={{ backgroundColor: "#F15156" }}
      justifyContent="center"
    >
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
          placeholderTextColor="#F15156"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          style={{
            padding: 10,
            marginVertical: 5,
            width: "80%",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 18,
            backgroundColor: "white",
            color: "#F15156",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            marginVertical: 5,
            width: "80%",
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 18,
            backgroundColor: "white",
          }}
        >
          <TextInput
            value={password}
            secureTextEntry={!showPassword}
            placeholder="Senha"
            placeholderTextColor="#F15156"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            style={{ flex: 1, color: "#F15156" }}
          />
          <TouchableOpacity onPress={handlePasswordVisibility}>
            {showPassword ? (
              <EyeOffIcon w="24" h="24" color="#F15156" />
            ) : (
              <EyeIcon color="#F15156" />
            )}
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size="large" color="white" />}
      </Box>
      <Box flex={2} justifyContent="center" alignItems="center">
        <Button
          onPress={signIn}
          alignItems="center"
          justifyContent="center"
          style={{
            backgroundColor: "#2D384C",
            padding: 10,
            borderRadius: 18,
            width: 150,
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
            borderRadius: 18,
            width: 150,
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
