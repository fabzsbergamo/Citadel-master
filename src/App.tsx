import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Welcome from './components/Welcome'
import Footer from './components/Footer'


function App() {
 
  return <Grid templateAreas={`"nav" "main" "footer"`}>
    <GridItem area='nav'>
      <Navbar/>
    </GridItem>
    <GridItem area='main' bg='dodgerblue'>
      <Welcome/>
    </GridItem>
    <GridItem area='footer' bg='dodgerblue'>
      <Footer/></GridItem>
  </Grid>
}

export default App
