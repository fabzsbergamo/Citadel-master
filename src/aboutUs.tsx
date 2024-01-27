import './aboutUs.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import styles from "./aboutUs.module.scss"
import Contactform from './components/Contactform'

const AboutUs = () => {
 
  return (
      <>
      <Box padding={"5%"}>
        <h1>About Citadel</h1>
        <Button as='a' target='_blank' variant='outline' href='https://chakra-ui.com' fontSize={'13px'}>
          Get in touch
        </Button>
      </Box>
      <Box className={styles.box}>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</SimpleGrid>
      </Box>
      </>
  )
}

export default AboutUs