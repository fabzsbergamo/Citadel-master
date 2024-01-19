import { Box, Button } from '@chakra-ui/react'
// import bgpic from '../assets/Estate-Planning-thumbnail.png'
import styles from './welcome.module.scss'

const Welcome = () => {

  return (
    <>
    <Box className={styles.box}>
      <div>
      <h1 className={styles.h1}>We Protect your Lifetime’s Work</h1>
      <p className={styles.p}>Ensure your wishes are fulfilled, assets protected, and remove any unnecessary burden for your family and loved ones at the very worst time.</p>
      </div>
    <Button as='a' target='_blank' variant='outline' href='https://chakra-ui.com'>
          Book your free Review today
    </Button>
    </Box>
    </>
  )
}

export default Welcome