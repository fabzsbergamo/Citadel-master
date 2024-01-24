import { Box, Button} from '@chakra-ui/react'
// import bgpic from '../assets/Estate-Planning-thumbnail.png'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {

const currentyear = new Date().getFullYear()

  return (
    <>
    <Box>
    <Box padding={'5%'} fontWeight={'bold'} fontStyle={'italic'}>The regulated activities concerning probate and trust services that Citadel offer are provided by one of the panel of SRA regulated solicitors that Citadel work with.</Box>
    <Link className="nav-item nav-link" to="/TermsAndConditions">Terms and  conditions</Link><br />
    <Link className="nav-item nav-link" to="/PrivacyPolicy">Privacy Policy</Link><br />    
    <Link className="nav-item nav-link" to="/ComplaintsProcedure">Complaints Procedure</Link>

    <div className={styles.box1}>
    Citadel is a trading name for BOXED OFF LIMITED - Company Registered Address: 167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF Company Reg Number: 14797515
    </div>
    <div className={styles.box2}>
    Copyright © {currentyear} Citadel </div>
    </Box>
    </>
  )
}

export default Footer