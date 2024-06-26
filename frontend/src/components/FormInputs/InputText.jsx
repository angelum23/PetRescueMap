import { Input, InputField } from "@gluestack-ui/themed";
import FormInput from "./FormInput";

const InputText = ({
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  secureTextEntry,
  label,
  erro,
  placeholder,
  color,
  inputOnChange,
  value,
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
        <InputField type={'text'} style={{color: color}} placeholderTextColor={color} secureTextEntry={secureTextEntry} placeholder={placeholder} value={value} onChangeText={(v) => inputOnChange(v)}/>
      </Input>
    </FormInput>
  );
};

export default InputText;
