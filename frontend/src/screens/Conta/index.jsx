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
import React, { useState } from "react";

const Conta = () => {
  const route = useRoute();
  const { logout } = route.params;
  const [email, setEmail] = useState("othiago.miranda@outlook.com");
  const [senha, setSenha] = useState("* * * * * * *");
  const [phone, setPhone] = useState("48998113917");
  const [nome, setNome] = useState("Thiago Dimon Miranda");
  const [image, setImage] = useState("");

  function salvarAlteracoes() {
    console.log("Salvar alteracoes");
  }

  return (
    <ScrollView>
      <Box padding={10}>
        <Box justifyContent="center" alignItems="center" marginTop={5}>
          <Text fontSize={16}>Editar Informações da Conta</Text>
          <InputText
            inputValue={nome}
            label={"Nome"}
            value={nome}
            inputOnChange={(text) => setEmail(text)}
            w={"100%"}
          />
          <FormInput label="Telefone" w={"100%"}>
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
            inputOnChange={(text) => setEmail(text)}
            w={"100%"}
          />
          <InputText
            inputValue={email}
            label={"Senha"}
            value={senha}
            inputOnChange={(text) => setEmail(text)}
            w={"100%"}
          />
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
