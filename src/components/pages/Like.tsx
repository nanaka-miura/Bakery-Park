import { FC, memo } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { shops } from "../../entities/Shop";
import { ShopCard } from "../organisms/shop/ShopCard";

export const Like: FC = memo(() => {
    const navigate = useNavigate();

    const onClickDetail = (id: number) => {
        return navigate(`/detail/${id}`);
    };

    return (
        <>
            <Box maxWidth="900px" m="0 auto" p="0 20px">
                <Heading
                    as="h1"
                    textAlign="center"
                    m="20px auto"
                    marginBottom={0}
                >
                    ユーザーさんのお気に入り店舗
                </Heading>
                <Text textAlign="center" fontSize="xs" mt="5px" mb="15px">
                    likes
                </Text>
                <Text
                    borderBottom="1px solid #D6B053"
                    mb="20px"
                    width="50px"
                    display="block"
                    mx="auto"
                    textAlign="center"
                />
            </Box>
            <Box
                p="20px 50px"
                w="100%"
                display="grid"
                gridGap="40px"
                gridTemplateColumns="repeat(auto-fit,minmax(230px, 1fr))"
                justifyItems="center"
            >
                {shops.map((shop) => {
                    return (
                        <ShopCard
                            onClickDetail={() => onClickDetail(shop.id)}
                            key={shop.id}
                            shop={shop}
                        />
                    );
                })}
            </Box>
        </>
    );
});
