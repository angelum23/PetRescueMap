import {
    AlertCircleIcon,
    Box,
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    FormControlLabel,
    FormControlLabelText
} from "@gluestack-ui/themed";

const FormInput = ({
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  label,
  children,
  erro
}) => {
  return (
    <Box h="$32" w="$72">
      <FormControl
        size="md"
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
      >
        <FormControlLabel mb="$1" color="black" mr={5} color="$textDark800" size="xl" lineHeight="$xl" fontWeight="$semibold" maxFontSizeMultiplier={1.2}>
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
        {children}
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>{erro}</FormControlErrorText>
        </FormControlError>
      </FormControl>
    </Box>
  );
};

export default FormInput;
