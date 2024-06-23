import {
  Box,
  Textarea,
  TextareaInput,
  RadioGroup,
  Radio,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
  Button,
  ScrollView,
  ButtonText,
  ButtonIcon,
} from "@gluestack-ui/themed";
import InputText from "../../components/FormInputs/InputText";
import InputImage from "../../components/FormInputs/InputImage";
import MapView, { Marker } from "react-native-maps";
import MapHook from "../Mapa/mapHook";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { firebase_db } from "../../components/firebase/firebaseConfig";
import Toast from "react-native-toast-message";
import MaskInput from "react-native-mask-input";
import FormInput from "../../components/FormInputs/FormInput";
import { getAuth } from "firebase/auth"; // Importando o módulo de autenticação

const CadastrarAnimais = () => {
  const [dadosEdicao, setDadosEdicao] = useState({});
  const [position, setPosition] = useState({});
  const [marker, setMarker] = useState(null);
  const [inputValues, setInputValues] = useState({
    nomeAnimal: dadosEdicao?.nomeAnimal || "",
    idade: dadosEdicao?.idade || "",
    raca: dadosEdicao?.raca || "",
    genero: dadosEdicao?.genero || "",
    descricao: dadosEdicao?.descricao || "",
    telefone: dadosEdicao?.telefone || "",
    imagem: dadosEdicao?.imagem || "",
  });

  const handleChangeInputValues = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const { handleRegionChange, region } = MapHook();

  const handleClickMap = (coordinate) => {
    setPosition(coordinate);
    setMarker({
      coordinate: coordinate,
      title: "Novo Marcador",
      description: "Descrição do novo marcador",
    });
  };

  function resetForm() {
    setInputValues({
      nomeAnimal: "",
      idade: "",
      raca: "",
      genero: "",
      descricao: "",
      telefone: "",
      imagem: "",
    });
  }

  const salvarAnimal = async () => {
    try {
      const userId = getAuth().currentUser?.uid; // Obter o ID do usuário autenticado
      if (!userId) {
        throw new Error("Usuário não autenticado");
      }

      const docRef = await addDoc(collection(firebase_db, "animais"), {
        ...inputValues,
        data: serverTimestamp(),
        userId: userId, // Adicionar userId ao documento
      });
      const showToast = () => {
        Toast.show({
          type: "success",
          text1: "Sucesso",
          text2: "Animal cadastrado com sucesso! 🚀",
        });
      };
      showToast();
      resetForm();
    } catch (e) {
      console.error("Error adding document: ", e);
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Erro em cadastrar o animal! 😢",
      });
    }
  };

  return (
    <Box flex={1} justifyContent="flex-start" m={10}>
      <ScrollView flex={1}>
        <InputText
          label={"Nome do Animal"}
          h={90}
          inputOnChange={(value) =>
            handleChangeInputValues("nomeAnimal", value)
          }
          value={inputValues.nomeAnimal}
        />
        <InputText
          label={"Idade"}
          h={90}
          inputOnChange={(value) => handleChangeInputValues("idade", value)}
          value={inputValues.idade}
        />
        <InputText
          label={"Raça"}
          h={90}
          inputOnChange={(value) => handleChangeInputValues("raca", value)}
          value={inputValues.raca}
        />
        <RadioGroup
          flexDirection="row"
          value={inputValues.genero}
          justifyContent="space-around"
          mb={12}
          onChange={(value) => handleChangeInputValues("genero", value)}
        >
          <Radio value="M" size="md">
            <RadioIndicator mr="$2">
              <RadioIcon ml={0.5}>
                <MaterialCommunityIcons
                  name="circle"
                  size={15}
                  color="#FFC100"
                />
              </RadioIcon>
            </RadioIndicator>
            <RadioLabel>Macho</RadioLabel>
          </Radio>
          <Radio value="F" size="md">
            <RadioIndicator mr="$2">
              <RadioIcon ml={0.5}>
                <MaterialCommunityIcons
                  name="circle"
                  size={15}
                  color="#FFC100"
                />
              </RadioIcon>
            </RadioIndicator>
            <RadioLabel>Fêmea</RadioLabel>
          </Radio>
        </RadioGroup>
        <Textarea
          size="md"
          borderColor="$borderLight300"
          borderRadius={"$xl"}
          mb={12}
        >
          <TextareaInput
            color="black"
            placeholder="Descrição"
            value={inputValues.descricao}
            onChangeText={(value) =>
              handleChangeInputValues("descricao", value)
            }
          />
        </Textarea>
        <FormInput label="Telefone Para Contato" w={"100%"}>
          <MaskInput
            value={inputValues.telefone}
            autoCapitalize="none"
            onChangeText={(masked, unmasked) => {
              handleChangeInputValues("telefone", masked);
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
        <Box marginTop={35} />
        <InputImage
          label={"Imagem"}
          h={200}
          onPickImage={(value) => handleChangeInputValues("imagem", value)}
          imageValue={inputValues.imagem}
        />
        <MapView
          style={{ marginTop: 50, height: 200 }}
          onPress={(e) => {
            handleClickMap(e.nativeEvent.coordinate);
          }}
          region={region}
          onRegionChangeComplete={handleRegionChange}
        >
          {!!marker && (
            <Marker
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
          )}
        </MapView>
        <Box mt={40} alignItems="center">
          <Button
            w={150}
            h={50}
            variant="solid"
            backgroundColor={"#2D384C"}
            onPress={() => salvarAnimal()}
            style={{ gap: 10, borderRadius: 50 }}
          >
            <ButtonIcon>
              <MaterialCommunityIcons
                name="content-save-all"
                size={16}
                color="white"
              />
            </ButtonIcon>
            <ButtonText>Salvar</ButtonText>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default CadastrarAnimais;
