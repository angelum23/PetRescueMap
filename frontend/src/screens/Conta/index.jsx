import { Button } from '@gluestack-ui/themed';
import { Box, ButtonText } from '@gluestack-ui/themed';
import { useRoute } from '@react-navigation/native';
import React from 'react';

const Conta = () => {
    const route = useRoute();
    const { logout } = route.params;

    return (
        <Box flex={3} justifyContent="center" alignItems="center">
            <Button
                onPress={() => logout()}
                alignItems="center"
                justifyContent="center"
                style={{
                    backgroundColor: "#2D384C",
                    padding: 10,
                    borderRadius: 50,
                    width: 200,
                    height: 50,
                }}
            >
                <ButtonText color="white" fontSize={16} fontWeight={600}>
                    Logout
                </ButtonText>
            </Button>
        </Box>
    );
}

export default Conta;