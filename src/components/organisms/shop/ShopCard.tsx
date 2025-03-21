import { FC, memo } from "react";
import { Box, Stack, Image, Flex, Text } from "@chakra-ui/react";

import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { Shop } from "../../../types/shop";

type Props = {
    onClickDetail: () => void;
    shop: Shop;
};

export const ShopCard: FC<Props> = memo((props) => {
    const { onClickDetail, shop } = props;

    return (
        <>
            <Box w="100%" h="300px" shadow="md" bg="#fff" borderRadius="5px">
                <Stack textAlign="left" gap="10px">
                    <Image
                        src={shop.image}
                        alt={shop.name}
                        w="100%"
                        h="150px"
                        borderRadius="5px 5px 0 0"
                        objectFit="cover"
                    />
                    <Box p="15px 20px" h="150px">
                        <Flex gap="7px">
                            <Text fontSize="xs">{shop.area}</Text>
                            <Text fontSize="xs">/</Text>
                            <Text fontSize="xs">{shop.station}</Text>
                        </Flex>
                        <Text
                            color="#D6B053"
                            fontSize="md"
                            marginTop={1}
                            marginBottom={3}
                        >
                            {shop.name}
                        </Text>
                        <PrimaryButton
                            children="詳しくみる"
                            onClick={onClickDetail}
                        />
                    </Box>
                </Stack>
            </Box>
        </>
    );
});
