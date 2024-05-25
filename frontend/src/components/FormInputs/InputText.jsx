import { Input, InputField } from "@gluestack-ui/themed";
import FormInput from "./FormInput";

const InputText = ({
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  label,
  erro,
  placeholder,
  inputOnChange,
  w,
  h
}) => {
  return (
    <FormInput
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      label={label}
      erro={erro}
      w={w}
      h={h}
    >
      <Input h={50} borderRadius={'$xl'} borderColor="$borderLight300">
        <InputField type={'text'} placeholder={placeholder} onChangeText={(v) => inputOnChange(v)}/>
      </Input>
    </FormInput>
  );
};

export default InputText;
