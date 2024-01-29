import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.css'
import { SetStateAction, useState } from 'react'

const contactForm = () =>  {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e: any) => setInput(e.target.value)
  
    const isError = input.length === 1 && input === ''
  
    return (
      <Box padding={"10%"}>
      <FormControl isInvalid={isError}>

        <FormLabel>First name</FormLabel>
        <Input placeholder='First name' />

        <FormLabel>Last name</FormLabel>
        <Input placeholder='Last name' />

        <FormLabel>Email</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}

        <FormLabel>Message</FormLabel>
        <Input/>

        <Button>Submit</Button>


      </FormControl>
      </Box>  
    )
  }

  export default contactForm