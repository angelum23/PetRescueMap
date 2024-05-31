import { Button } from "@gluestack-ui/themed";
import { Box, ButtonText, ButtonIcon } from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Conta = () => {
  const route = useRoute();
  const { logout } = route.params;

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
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
  );
};

export default Conta;
