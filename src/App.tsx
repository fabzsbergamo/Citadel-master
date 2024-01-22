import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer'
import Home from './home'


function App() {
 
  return <Grid templateAreas={`"nav" "main" "footer"`}>
    <GridItem area='nav' bg='dodgerblue'>
      <Navbar/>
    </GridItem>
    <GridItem area='main'>
      <Home/>
    </GridItem>
    <GridItem area='footer' bg='dodgerblue'>
      <Footer/></GridItem>
  </Grid>
}

export default App
