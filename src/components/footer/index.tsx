import { Box } from '@chakra-ui/react';
import React from 'react';

function Footer(): JSX.Element {
    return <Box as="footer" bg="transparent" color="white" py="1rem">
        <Box display="flex" justifyContent="center">Coding with &nbsp; <Box as="span" color="red"> &hearts; </Box> &nbsp; -  &nbsp;<Box fontStyle="italic" fontSize="1rem">George Allen Barnas</Box></Box>
        <Box fontSize="0.8rem" textAlign="center">Barnas © 2023</Box>
    </Box>
}
export default Footer