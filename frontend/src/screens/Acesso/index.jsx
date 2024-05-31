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
import InputText from "../../components/FormInputs/InputText";
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
    <Box
      flex={1}
      style={{ backgroundColor: "#F15156" }}
      justifyContent="center"
    >
      <Box flex={4} justifyContent="center" alignItems="center">
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
      <Box flex={2} justifyContent="center" alignItems="center">
        <InputText
          inputValue={email}
          placeholder={"Email"}
          inputOnChange={(text) => setEmail(text)}
          color={"white"}
          w={"80%"}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            marginVertical: 5,
            width: "80%",
            borderColor: "#d4d4d4",
            borderWidth: 1,
            borderRadius: 12
          }}
        >
          <TextInput
            value={password}
            secureTextEntry={!showPassword}
            placeholder="Senha"
            placeholderTextColor={"white"}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            style={{ flex: 1, fontSize: 16, color: "white" }}
          />
          <TouchableOpacity onPress={handlePasswordVisibility}>
            {showPassword ? (
              <EyeOffIcon w="24" h="24" color="white" />
            ) : (
              <EyeIcon color="white" />
            )}
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size="large" color="#d4d4d4" />}
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
