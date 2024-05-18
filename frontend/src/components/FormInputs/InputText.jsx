import { Input, InputField } from "@gluestack-ui/themed";
import FormInput from "./FormInput";

const InputText = ({
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  label,
  erro,
  placeholder
}) => {
  return (
    <FormInput
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      label={label}
      erro={erro}
    >
      <Input h={50} borderRadius={'$xl'}>
        <InputField type={'text'} placeholder={placeholder}/>
      </Input>
    </FormInput>
  );
};

export default InputText;
