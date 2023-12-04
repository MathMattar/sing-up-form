import { Box } from "@chakra-ui/react";
import styles from './Ballon.module.css';

export default function Ballon() {
  return (
    <>
      <Box bg='#5E54A4' p='17px' borderRadius='10px' w='540px'>
        <h2 className={styles.heading}><strong>Try it free 7 days</strong> then $20/mo. thereafter</h2>
      </Box>
    </>
  );
}

