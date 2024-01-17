import { Box, Button } from '@chakra-ui/react'
// import bgpic from '../assets/Estate-Planning-thumbnail.png'
import styles from './welcome.module.scss'

const Welcome = () => {

  return (
    <>
    <Box className={styles.box}>
    <Button as='a' target='_blank' variant='outline' href='https://chakra-ui.com'>
          Book your free Review today
    </Button>
    </Box>
    </>
  )
}

export default Welcome