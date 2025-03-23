import { FC, memo } from "react";
import { Stack, Box, Input, Flex, Text, Heading } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
    const onClickLogin = () => {
        alert("後ほど実装");
    };

    return (
        <Box
            p="40px"
            bg="#fff"
            maxWidth="700px"
            mt="40px"
            borderRadius="10px"
            shadow="md"
            width="calc(100% - 60px)"
            mx="auto"
            marginBottom="50px"
        >
            <Heading textAlign="center" mb="20px">
                ログイン
            </Heading>
            <Text
                borderBottom="1px solid #D6B053"
                mb="40px"
                width="50px"
                display="block"
                mx="auto"
                textAlign="center"
            />
            <Stack as="dl" gap="20px">
                <Box>
                    <Flex gap="3px" as="dt">
                        <Text>メールアドレス</Text>
                        <Text color="red">*</Text>
                    </Flex>
                    <Text as="dd">
                        <Input outline="none" />
                    </Text>
                </Box>
                <Box>
                    <Flex gap="3px" as="dt">
                        <Text>パスワード</Text>
                        <Text color="red">*</Text>
                    </Flex>
                    <Text as="dd">
                        <Input outline="none" />
                    </Text>
                </Box>
                <Box width="120px" m="0 auto" mt="20px">
                    <PrimaryButton
                        children="ログインする"
                        onClick={onClickLogin}
                    />
                </Box>
            </Stack>
        </Box>
    );
});
