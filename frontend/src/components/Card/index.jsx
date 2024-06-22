import {
    Card,
    Heading,
    Image,
    Text,
    Center,
  } from "@gluestack-ui/themed";

const CardPost = ({ nomeAnimal, idade, raca, genero, descricao, imagemValue, telefone }) => {
  return (
    <Card
      size="md"
      variant="elevated"
      m="$3"
      p={"$3"}
      bgColor="#e6e6e6"
      borderRadius={"$2xl"}
      border={1}
    >
      <Heading mb="$1" size="md">
        Disponível para adoção!
      </Heading>
      <Center>
        <Image
          size="2xl"
          borderRadius="$sm"
          source={"data:image/jpeg;base64," + imagemValue}
          alt="imagem-logo"
        />
      </Center>
      <Text mt={10}>
        <Text fontWeight={"$bold"}>Nome do Animal: </Text>{nomeAnimal}
      </Text>
      <Text mt={10}>
        <Text fontWeight={"$bold"}>Idade: </Text>{idade}
      </Text>
      <Text mt={10}>
        <Text fontWeight={"$bold"}>Raça: </Text>{raca}
      </Text>
      <Text mt={10}>
        <Text fontWeight={"$bold"}>Genêro: </Text>{genero == "M" ? "Macho" : "Fêmea"}
      </Text>
      <Text mt={10}>
        <Text fontWeight={"$bold"}>Descrição: </Text>{descricao}
      </Text>
      <Text mt={10}>
        <Text fontWeight={"$bold"}>Telefone Para Contato: </Text>{telefone}
      </Text>
    </Card>
  );
};

export default CardPost;