import { Box, Text } from "@gluestack-ui/themed";
import InputText from "../../components/FormInputs/InputText";

const CadastrarAnimais = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <InputText label="Nome" placeholder={"Nome do animal"} isRequired={true}></InputText>
    </Box>
  );
};

export default CadastrarAnimais;
