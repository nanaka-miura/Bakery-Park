import { FC, memo, useRef, useState, useEffect } from "react";
import { Box, Text, Input, Stack, Flex, Button, Image } from "@chakra-ui/react";

import { PageTitle } from "../molecules/PageTitle";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const UserSetting: FC = memo(() => {
    const [profileSrc, setProfileSrc] = useState<string>("");

    const onClickChange = () => {
        return alert("後ほど実装");
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleChangeProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (!!files && !!files[0]) {
            setProfileSrc(window.URL.createObjectURL(files[0]));
        }
    };

    useEffect(() => {
        return () => {
            if (profileSrc) {
                window.URL.revokeObjectURL(profileSrc);
            }
        };
    }, [profileSrc]);

    return (
        <>
            <PageTitle title="設定" subTitle="setting" />
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
                <Stack as="dl" gap="20px">
                    <Box position="relative" w="150px" h="150px" m="0 auto">
                        {!!profileSrc && (
                            <Image
                                src={profileSrc}
                                alt="プロフィール画像"
                                style={{ objectFit: "cover" }}
                                borderRadius="50%"
                                position="absolute"
                                top="0"
                                left="0"
                                w="100%"
                                h="100%"
                            />
                        )}
                        <Input
                            type="file"
                            accept="image/*"
                            hidden
                            ref={fileInputRef}
                            onChange={handleChangeProfileImg}
                        />
                        <Button
                            type="button"
                            onClick={() =>
                                !!fileInputRef.current &&
                                fileInputRef.current.click()
                            }
                            w="150px"
                            h="150px"
                            borderRadius="50%"
                            bg="rgba(204, 183, 140, 0.1)"
                            backgroundImage="url('/camera.png')"
                            backgroundSize="30%"
                            backgroundRepeat="no-repeat"
                            backgroundPosition="center"
                        />
                    </Box>
                    <Box>
                        <Flex gap="3px" as="dt">
                            <Text>ニックネーム</Text>
                            <Text color="red">*</Text>
                        </Flex>
                        <Text as="dd">
                            <Input outline="none" />
                        </Text>
                    </Box>
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
                            children="変更する"
                            onClick={onClickChange}
                        />
                    </Box>
                </Stack>
            </Box>
        </>
    );
});
