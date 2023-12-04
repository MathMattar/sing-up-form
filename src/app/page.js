import { Box, Flex } from "@chakra-ui/react";
import Form from "./components/Form/page";
import styles from './page.module.css';
import Ballon from "./components/Ballon/page";

export default function Home() {
  return (
    <Box w='100%' h='100%'>
      <Flex flexDir={'row'} wrap={'wrap'} justify={"space-between"} align={'center'} columnGap='45px' >
        <Box w='525px'>
          <Flex flexDir={'column'} rowGap='32px'>
            <h1 className={styles.heading}>Learn to code by watching others</h1>
            <p className={styles.body}>
              See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
            </p>
          </Flex>
        </Box>
        <Flex flexDir={'column'} rowGap='24px'>
          <Ballon />
          <Form />
        </Flex>
      </Flex>
    </Box >
  )
}
