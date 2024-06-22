import { FabIcon } from "@gluestack-ui/themed";
import {
    Box,
    Fab,
    AddIcon
} from "@gluestack-ui/themed";
import React from 'react';
import { FabLabel } from "@gluestack-ui/themed";

const Home = () => {
    return (
        <Box flex={1} justifyContent="flex-start" m={10}>
            <Fab
                size="lg"
                bg="#F15156"
                placement="bottom right"
                isHovered={false}
                isDisabled={false}
                isPressed={false}
            >
                <FabIcon as={AddIcon} />
            </Fab>
        </Box>
    );
}

export default Home;