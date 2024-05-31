import * as ImagePicker from "expo-image-picker";
import {
  Center,
  HStack,
  AddIcon,
  Image,
  ButtonIcon
} from "@gluestack-ui/themed";
import { Button } from "../Buttons/Button";
import FormInput from "./FormInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TrashIcon } from "@gluestack-ui/themed";

const InputImage = ({
  label,
  erro,
  imageValue,
  onPickImage,
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  borderColor = null,
  w,
  h
}) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      onPickImage(result.assets[0].base64);
    }
  };

  return (
    <FormInput
      label={label}
      erro={erro}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      h={h}
      w={w}
    >
      <Center
        mb={5}
        h={h}
        borderWidth={2}
        borderColor={borderColor != null ? borderColor : "$trueGray200"}
        rounded={"$xl"}
      >
        {imageValue ? (
          <Image
            flex={1}
            aspectRatio={"1/1"}
            m={10}
            source={"data:image/jpeg;base64," + imageValue}
            alt="imagem-logo"
          />
        ) : (
          <MaterialCommunityIcons
            name={"tooltip-image-outline"}
            size={80}
            color={borderColor != null ? borderColor : "#B1B1B1"}
          />
        )}

        <HStack position={"absolute"} end={5} bottom={5} mt={15} gap={5}>
          {imageValue ? (
            <Button
              maxWidth={45}
              px={0}
              py={8}
              maxHeight={45}
              variant={"outline"}
              action={borderColor != null ? "default" : "secondary"}
              flex={1}
              icon={TrashIcon}
              borderColor={borderColor != null ? borderColor : ""}
              onPress={() => onPickImage(null)}
            />
          ) : (
            <Button
              maxWidth={45}
              px={0}
              py={8}
              maxHeight={45}
              variant={"outline"}
              borderColor={borderColor != null ? borderColor : "$trueGray400"}
              onPress={pickImage}
              action={borderColor != null ? "default" : "secondary"}
              icon={AddIcon}
            />
          )}
        </HStack>
      </Center>
    </FormInput>
  );
};

export default InputImage;
