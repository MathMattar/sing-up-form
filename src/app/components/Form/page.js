'use client'

import { Box, Button, Flex } from "@chakra-ui/react";
import FormInput from "../FormInput/page";
import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isFirstNameError = firstName.trim() === '' || !/^[A-Za-z]{3,}$/.test(firstName)
  const isLastNameError = lastName.trim() === '' || !/^[A-Za-z]{3,}$/.test(lastName)
  const isEmailError = email.trim() === '' || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)
  const isPasswordError = password.trim() === '' || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)


  return (
    <Box bg='white' p='40px' borderRadius='10px' w='540px' boxShadow='base' p='6' rounded='md' >
      <Flex flexDir={'column'} rowGap='20px'>
        <FormInput
          type="text"
          placeholder="First Name"
          error={isFirstNameError}
          errorMessage="This field must contain at least three letters"
          onChange={(e) => setFirstName(e.target.value)} />

        <FormInput
          type="text"
          placeholder="Last Name"
          error={isLastNameError}
          errorMessage="This field must contain at least three letters"
          onChange={(e) => setLastName(e.target.value)} />

        <FormInput
          type="email"
          placeholder="Email"
          error={isEmailError}
          errorMessage="Looks like this is not an email"
          onChange={(e) => setEmail(e.target.value)} />

        <FormInput
          type="password"
          placeholder="Password"
          error={isPasswordError}
          errorMessage="The password must contain an uppercase and lowercase letter, a number and a special character"
          onChange={(e) => setPassword(e.target.value)} />

        <Button colorScheme='whatsapp' >Claim your free trial</Button>
      </Flex>
    </Box >
  )
}
