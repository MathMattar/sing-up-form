import { Box, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function FormInput({ type, placeholder, error, onChange, errorMessage }) {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (!touched) setTouched(true);
    onChange(e);
  };

  const handleBlur = () => {
    if (!touched) setTouched(true);
  };

  return (
    <Box>
      <FormControl isInvalid={error && touched}>
        <Input
          type={type}
          placeholder={placeholder}
          id={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off" />
        {error && touched && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    </Box>
  );
}
