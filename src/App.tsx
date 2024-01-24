import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import {Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer'
import Home from './home'
import TermsAndConditions from './termsAndConditions'
import PrivacyPolicy from './privacyPolicy'
import ComplaintsProcedure from './complaintsProcedure'


function App() {
 
  return <Grid templateAreas={`"nav" "main" "footer"`}>
    <GridItem area='nav' bg='white'>
      <Navbar/>
    </GridItem>
    <GridItem area='main'>
      <Switch>
      <Route path="/Home" component={Home}></Route>
      <Route path="/TermsAndConditions" component={TermsAndConditions}></Route>
      <Route path="/PrivacyPolicy" component={PrivacyPolicy}></Route>
      <Route path="/ComplaintsProcedure" component={ComplaintsProcedure}></Route>
      <Redirect from="/" exact to="Home"/>
      </Switch>
    </GridItem>
    <GridItem area='footer' bg='lightgrey'>
      <Footer/></GridItem>
  </Grid>
}

export default App
