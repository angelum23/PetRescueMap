import { Button } from "@gluestack-ui/themed";
import {
  Box,
  ButtonText,
  ButtonIcon,
  ScrollView,
  Text,
} from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InputText from "../../components/FormInputs/InputText";
import MaskInput from "react-native-mask-input";
import FormInput from "../../components/FormInputs/FormInput";
import InputImage from "../../components/FormInputs/InputImage";
import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firebase_db } from "../../components/firebase/firebaseConfig";
import Toast from "react-native-toast-message";
import { ActivityIndicator } from "react-native";

const Conta = () => {
  const route = useRoute();
  const { logout, getEmail } = route.params;
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function salvarAlteracoes() {
    try {
      setLoading(true);
      const docRef = doc(firebase_db, "usuarios", id);
      await updateDoc(docRef, {
        nome: nome,
        phone: phone,
        // password: senha, Tem que resolver esse field, ele não tá encontrando no firebase
        image: image,
      });
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Alterações realizadas com sucesso! 🚀",
      });
    } catch (error) {
      console.error("Error updating document: ", error);
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Erro ao alterar informações! 😢",
      });
    } finally {
      setLoading(false);
    }
  }

  async function fetchData() {
    try {
      setLoading(true);
      const q = query(
        collection(firebase_db, "usuarios"),
        where("email", "==", getEmail())
      );
      setEmail(getEmail());
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        return;
      }
      querySnapshot.forEach((doc) => {
        console.log("Doc id", doc.id);
        setId(doc.id);
        setNome(doc.data().nome);
        setPhone(doc.data().phone);
        setSenha(doc.data().password);
        setImage(doc.data().image);
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <Box padding={10}>
        <Box justifyContent="center" alignItems="center" marginTop={5}>
          {loading && <ActivityIndicator size="large" color="#F15156" />}
          <Text fontSize={16}>Editar Informações da Conta</Text>
          <InputText
            inputValue={nome}
            label={"Nome"}
            value={nome}
            inputOnChange={(text) => setNome(text)}
            w={"100%"}
          />
          <FormInput label="Telefone" w={"100%"}>
            <MaskInput
              value={phone}
              autoCapitalize="none"
              onChangeText={(masked, unmasked) => {
                setPhone(unmasked);
              }}
              keyboardType="numeric"
              style={{
                padding: 10,
                width: "100%",
                borderColor: "#d4d4d4",
                borderWidth: 1,
                borderRadius: 12,
                marginBottom: -27,
                fontSize: 16,
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
          </FormInput>
          <Box marginTop={27} />
          <InputText
            inputValue={email}
            label={"Email"}
            value={email}
            w={"100%"}
          />
          {/* <InputText
            inputValue={email}
            label={"Senha"}
            value={senha}
            secureTextEntry={true}
            inputOnChange={(text) => setEmail(text)}
            w={"100%"}
          /> */}
          <InputImage
            w={"100%"}
            h={300}
            onPickImage={(value) => setImage(value)}
            imageValue={image}
          />
        </Box>
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          marginTop={33}
          style={{ gap: 10 }}
        >
          <Button
            onPress={() => logout()}
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: "#2D384C",
              padding: 10,
              borderRadius: 50,
              width: 150,
              height: 50,
              gap: 10,
            }}
          >
            <ButtonIcon>
              <SimpleLineIcons name="logout" size={16} color="white" />
            </ButtonIcon>
            <ButtonText color="white" fontSize={16} fontWeight={600}>
              Sair
            </ButtonText>
          </Button>
          <Button
            onPress={() => salvarAlteracoes()}
            alignItems="center"
            justifyContent="center"
            style={{
              backgroundColor: "#2D384C",
              padding: 10,
              borderRadius: 50,
              width: 150,
              height: 50,
              gap: 10,
            }}
          >
            <ButtonIcon>
              <MaterialCommunityIcons
                name="content-save-all"
                size={16}
                color="white"
              />
            </ButtonIcon>
            <ButtonText color="white" fontSize={16} fontWeight={600}>
              Salvar
            </ButtonText>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Conta;
