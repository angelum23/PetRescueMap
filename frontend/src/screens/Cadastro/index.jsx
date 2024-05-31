import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Box, Button, ButtonText, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, TextInput } from "react-native";
import MaskInput from "react-native-mask-input";
import InputImage from "../../components/FormInputs/InputImage";
import { firebase_auth } from "../../components/firebase/firebaseConfig";

const SignUpPage = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
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
    <Box
      flex={1}
      style={{ backgroundColor: "#F15156" }}
      justifyContent="center"
      pt={30}
    >
      <ScrollView>
        <Box flex={4} w="100%" alignItems="center" justifyContent="center">
          <TextInput
            value={nome}
            placeholder="Nome"
            autoCapitalize="none"
            onChangeText={(text) => setNome(text)}
            style={{
              padding: 10,
              marginVertical: 5,
              width: "80%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 18,
              backgroundColor: "white",
            }}
          />
          <MaskInput
            value={phone}
            placeholder="Telefone (somente números)"
            autoCapitalize="none"
            onChangeText={(masked, unmasked) => {
              setPhone(unmasked);
            }}
            style={{
              padding: 10,
              marginVertical: 5,
              width: "80%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 18,
              backgroundColor: "white",
            }}
            mask={[
              "(",
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
          <TextInput
            value={email}
            placeholder="Email"
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
            }}
          />
          <TextInput
            value={password}
            secureTextEntry={true}
            placeholder="Senha"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            style={{
              padding: 10,
              marginVertical: 5,
              width: "80%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 18,
              backgroundColor: "white",
            }}
          />
          <InputImage
            w={"80%"}
            h={300}
            onPickImage={(value) => setImage(value)}
            imageValue={image}
            borderColor="white"
          />
        </Box>
        <Box flex={1} mt={50}>
          <ActivityIndicator size="large" color={loading ? "white" : "#F15156"} />
        </Box>
        <Box flex={1} alignItems="center" mt={20}>
          <Button
            onPress={signUp}
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
      </ScrollView>
    </Box>
  );
};

export default SignUpPage;
