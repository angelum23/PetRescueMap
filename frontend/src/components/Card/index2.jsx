import {
  Card,
  Heading,
  Image,
  Text,
  Center,
} from "@gluestack-ui/themed";

const UserCard = ({ nomeAnimal, idade, raca, genero, descricao, imagemValue, telefone }) => {
  return (
    <Card
      size="sm" 
      variant="elevated"
      m="$3"
      p={"$2"}
      bgColor="#e6e6e6"
      borderRadius={"$lg"} 
      border={1}
    >
      <Heading mb="$1" size="sm"> 
        Meus Animaias para adoção!
      </Heading>
      <Center>
        <Image
          size="lg" 
          borderRadius="$sm"
          source={"data:image/jpeg;base64," + imagemValue}
          alt="imagem-animal"
        />
      </Center>
      <Text mt={2}>
        <Text fontWeight={"$bold"}>Nome do Animal: </Text>{nomeAnimal}
      </Text>
      <Text mt={2}>
        <Text fontWeight={"$bold"}>Idade: </Text>{idade}
      </Text>
      <Text mt={2}>
        <Text fontWeight={"$bold"}>Raça: </Text>{raca}
      </Text>
      <Text mt={2}>
        <Text fontWeight={"$bold"}>Genêro: </Text>{genero === "M" ? "Macho" : "Fêmea"}
      </Text>
      <Text mt={2}>
        <Text fontWeight={"$bold"}>Descrição: </Text>{descricao}
      </Text>
      <Text mt={2}>
        <Text fontWeight={"$bold"}>Telefone Para Contato: </Text>{telefone}
      </Text>
    </Card>
  );
};

export default UserCard;
