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
  ButtonText,
  ScrollView,
  useToast,
} from "@gluestack-ui/themed";
import InputText from "../../components/FormInputs/InputText";
import InputImage from "../../components/FormInputs/InputImage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  collection,
  addDoc,
  doc
} from 'firebase/firestore';
import { firebase_db } from "../../components/firebase/firebaseConfig";

const CadastrarAnimais = () => {
  const [dadosEdicao, setDadosEdicao] = useState({});
  const [inputValues, setInputValues] = useState({
    nomeAnimal: dadosEdicao?.nomeAnimal || null,
    idade: dadosEdicao?.idade || null,
    raca: dadosEdicao?.raca || null,
    genero: dadosEdicao?.genero || null,
    descricao: dadosEdicao?.descricao || null,
    imagem: dadosEdicao?.imagem || null,
  });
  const toast = useToast();

  const handleChangeInputValues = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const resetForm = () => {
    setInputValues({
      nomeAnimal: "",
      idade: "",
      raca: "",
      genero: "",
      descricao: "",
      imagem: "",
    });
  };

  const salvarAnimal = async () => {
    try {
      const docRef = await addDoc(collection(firebase_db, "animais"), inputValues);
      console.log("Document written with ID: ", docRef.id);
      toast.show({
        description: "Salvo com sucesso!",
      });
      resetForm();
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.show({
        description: "Erro ao salvar!",
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
          inputValue={inputValues.nomeAnimal}
        />
        <InputText
          label={"Idade"}
          h={90}
          inputOnChange={(value) => handleChangeInputValues("idade", value)}
          inputValue={inputValues.idade}
        />
        <InputText
          label={"Raça"}
          h={90}
          inputOnChange={(value) => handleChangeInputValues("raca", value)}
          inputValue={inputValues.raca}
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
          <TextareaInput color="black" placeholder="Descrição" onChangeText={(value) => handleChangeInputValues("descricao", value)} />
        </Textarea>
        <InputImage label={"Imagem"} h={200} onPickImage={(value) => handleChangeInputValues('imagem', value)} imageValue={inputValues.imagem} />
        <Box mt={40} alignItems="center">
          <Button
            size="md"
            w={100}
            borderRadius={"$xl"}
            variant="solid"
            backgroundColor={"#2D384C"}
            onPress={() => salvarAnimal()}
          >
            <ButtonText>Salvar</ButtonText>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default CadastrarAnimais;
