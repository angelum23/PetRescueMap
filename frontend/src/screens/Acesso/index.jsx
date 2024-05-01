import {
  Box,
  Button,
  ButtonText,
  Text,
  ButtonIcon,
} from "@gluestack-ui/themed";
import { Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Acessar() {
  return (
    <Box flex={1} style={{ backgroundColor: "#F15156" }}>
      <Box flex={1} marginTop={55} marginLeft={15}>
        <Button>
          <ButtonIcon>
            <SimpleLineIcons name="logout" size={24} color="black" />
          </ButtonIcon>
        </Button>
      </Box>
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
            fontWeight: 600,
          }}
        >
          pet rescue app
        </Text>
      </Box>
      <Box flex={2} justifyContent="center" alignItems="center">
        <Button
          alignItems="center"
          justifyContent="center"
          style={{
            backgroundColor: "#2D384C",
            padding: 10,
            borderRadius: 50,
            width: 200,
            height: 50,
          }}
        >
          <ButtonText color="white" fontSize={16} fontWeight={600}>
            Acessar
          </ButtonText>
        </Button>
      </Box>
    </Box>
  );
}
