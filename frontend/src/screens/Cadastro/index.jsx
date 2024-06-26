import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Box, Button, ButtonText, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ActivityIndicator, TextInput } from "react-native";
import MaskInput from "react-native-mask-input";
import InputImage from "../../components/FormInputs/InputImage";
import InputText from "../../components/FormInputs/InputText";
import { firebase_auth } from "../../components/firebase/firebaseConfig";
import Toast from "react-native-toast-message";
import { addDoc, collection } from "@firebase/firestore";
import { firebase_db } from "../../components/firebase/firebaseConfig";

const SignUpPage = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputValues = {
    nome: nome,
    phone: phone,
    email: email,
    image: image,
  };
  
  const auth = firebase_auth;

  const salvarUsuario = async () => {
    try {
      setLoading(true);
      await addDoc(collection(firebase_db, "usuarios"), inputValues);
      const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Cadastro realizado com sucesso! 🚀'
        });
      }
      await signUp();
      showToast();
      navigation.navigate("Login");
    } catch (e) {
      console.error("Error adding document: ", e);
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Erro ao cadastrar usuário! 😢'
      });
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Sign Up Error:", error.message);
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
        <Box flex={4} w="100%" alignItems="center" justifyContent="center" style={{gap: 8}}>
          <InputText
            inputValue={nome}
            placeholder={"Nome"}
            color={"white"}
            inputOnChange={(text) => setNome(text)}
            w={"80%"}
          />
          <MaskInput
            value={phone}
            placeholder="Telefone"
            placeholderTextColor={"white"}
            autoCapitalize="none"
            onChangeText={(masked, unmasked) => {
              setPhone(unmasked);
            }}
            keyboardType="numeric"
            style={{
              padding: 10,
              width: "80%",
              borderColor: "#d4d4d4",
              borderWidth: 1,
              borderRadius: 12,
              marginBottom: -27,
              fontSize: 16,
              color: "white"
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
          <InputText
            inputValue={email}
            placeholder={"Email"}
            inputOnChange={(text) => setEmail(text)}
            color={"white"}
            w={"80%"}
          />
          <TextInput
            value={password}
            secureTextEntry={true}
            placeholder="Senha"
            placeholderTextColor={"white"}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            style={{
              padding: 10,
              width: "80%",
              borderColor: "#d4d4d4",
              borderWidth: 1,
              borderRadius: 12,
              fontSize: 16, 
              color: "white"
            }}
          />
          <InputImage
            w={"80%"}
            h={300}
            onPickImage={(value) => setImage(value)}
            imageValue={image}
            borderColor="#d4d4d4"
          />
        </Box>
        <Box flex={1} mt={50}>
          <ActivityIndicator size="large" color={loading ? "white" : "#F15156"} />
        </Box>
        <Box flex={1} alignItems="center" mt={20}>
          <Button
            onPress={salvarUsuario}
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: "#2D384C",
              padding: 10,
              borderRadius: 50,
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
