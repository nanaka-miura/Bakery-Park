import { FC, memo } from "react";
import { Flex, Image, Box, Heading, Text, Stack } from "@chakra-ui/react";

import { Shop } from "../../types/shop";

type Props = {
    shop: Shop;
};

export const Detail: FC<Props> = memo((props) => {
    const { shop } = props;

    return (
        <>
            <Box maxWidth="900px" m="0 auto" p="0 20px">
                <Heading
                    as="h1"
                    textAlign="center"
                    m="20px auto"
                    marginBottom={0}
                >
                    {shop.name}
                </Heading>
                <Text textAlign="center" fontSize="xs" mt="5px" mb="15px">
                    {shop.area}
                </Text>
                <Text
                    borderBottom="1px solid #D6B053"
                    mb="20px"
                    width="50px"
                    display="block"
                    mx="auto"
                    textAlign="center"
                />
                <Text textAlign="center" mb="30px">
                    {shop.detail}
                </Text>
            </Box>
            <Box h="400px" w="100%">
                <Image
                    src={shop.image}
                    alt={shop.name}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
            </Box>
            <Stack
                maxWidth="1000px"
                width="calc(100% - 60px)"
                my="30px"
                mx="auto"
                p="30px 50px"
                gap="10px"
                bg="#fff"
                shadow="md"
                borderRadius="5px"
            >
                <Text
                    textAlign="center"
                    fontSize="md"
                    fontWeight="bold"
                    mb="5px"
                >
                    店舗情報
                </Text>
                <Text
                    borderBottom="1px solid #D6B053"
                    mb="20px"
                    width="50px"
                    display="block"
                    mx="auto"
                    textAlign="center"
                />
                <Flex w="100%" gap="10px">
                    <Text w="20%" color="#B88822">
                        住所
                    </Text>
                    <Flex w="85%" gap="10px">
                        <Text>{shop.address}</Text>
                        <Box
                            bg="#B88822"
                            color="#fff"
                            p="3px 7px"
                            fontSize="xs"
                            borderRadius="20px"
                        >
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseOver={(e) => {
                                    e.currentTarget.style.opacity = "0.8";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                }}
                            >
                                MAP
                            </a>
                        </Box>
                    </Flex>
                </Flex>
                <Flex w="100%" gap="10px">
                    <Text w="20%" color="#B88822">
                        電話番号
                    </Text>
                    <Text w="85%">{shop.phone}</Text>
                </Flex>
                <Flex w="100%" gap="10px">
                    <Text w="20%" color="#B88822">
                        最寄り駅
                    </Text>
                    <Text w="85%">{shop.station}</Text>
                </Flex>
                <Flex w="100%" gap="10px">
                    <Text w="20%" color="#B88822">
                        営業時間
                    </Text>
                    <Text w="85%">{shop.hours}</Text>
                </Flex>
                <Flex w="100%" gap="10px">
                    <Text w="20%" color="#B88822">
                        定休日
                    </Text>
                    <Text w="85%">{shop.holiday}</Text>
                </Flex>
                <Flex w="100%" gap="10px">
                    <Text w="20%" color="#B88822">
                        ホームページ
                    </Text>
                    <a
                        style={{ width: "85%" }}
                        href={shop.hp}
                        onMouseOver={(e) => {
                            e.currentTarget.style.opacity = "0.8";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.opacity = "1";
                        }}
                    >
                        {shop.hp}
                    </a>
                </Flex>
                <Flex w="100%" gap="10px">
                    <Text w="20%" color="#B88822">
                        Instagram
                    </Text>
                    <a
                        style={{ width: "85%" }}
                        href={shop.hp}
                        onMouseOver={(e) => {
                            e.currentTarget.style.opacity = "0.8";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.opacity = "1";
                        }}
                    >
                        {shop.instagram}
                    </a>
                </Flex>
            </Stack>
            <Stack
                maxWidth="1000px"
                width="calc(100% - 60px)"
                my="30px"
                mx="auto"
                p="30px 50px"
                gap="10px"
                bg="#fff"
                shadow="md"
                borderRadius="5px"
            >
                <Text
                    textAlign="center"
                    fontSize="md"
                    fontWeight="bold"
                    mb="5px"
                >
                    近くの公園情報
                </Text>
                <Text
                    borderBottom="1px solid #D6B053"
                    mb="20px"
                    width="50px"
                    display="block"
                    mx="auto"
                    textAlign="center"
                />
            </Stack>
        </>
    );
});
