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
  erro, 
  w,
  h
}) => {
  return (
    <Box h={h} w={w}>
      <FormControl
        size="md"
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
      >
        <FormControlLabel mb="$1" mr={5} size="xl" lineHeight="$xl" maxFontSizeMultiplier={1.2}>
          <FormControlLabelText color="$textDark500">{label}</FormControlLabelText>
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
