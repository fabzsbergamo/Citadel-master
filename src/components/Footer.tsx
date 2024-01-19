import { Box } from '@chakra-ui/react'
// import bgpic from '../assets/Estate-Planning-thumbnail.png'
import styles from './footer.module.scss'

const Footer = () => {

const currentyear = new Date().getFullYear()

  return (
    <>
    <Box>
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