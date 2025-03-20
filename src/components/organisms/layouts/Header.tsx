import { FC, memo, ReactNode, useCallback, useState } from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => setIsOpen(true);

    const navigate = useNavigate();

    const onClickRegister = useCallback(() => {
        return navigate("/register");
    }, [navigate]);

    const onClickLogin = useCallback(() => {
        return navigate("/login");
    }, [navigate]);

    const onClickLike = useCallback(() => {
        return navigate("/like");
    }, [navigate]);

    const onClickSetting = useCallback(() => {
        return navigate("/setting");
    }, [navigate]);

    const onClickLogout = useCallback(() => {
        return navigate("/");
    }, [navigate]);

    const onClickHome = useCallback(() => {
        return navigate("/");
    }, [navigate]);

    const onClose = () => setIsOpen(false);

    return (
        <>
            <Flex
                justify="space-between"
                align="center"
                padding={{ base: 5, md: 7 }}
                borderTop="2px solid #D6B053"
            >
                <Flex
                    direction="column"
                    align="center"
                    transition="transform 0.2s ease-out"
                    _hover={{ transform: "scale(1.1)", color: "#D6B053" }}
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: "2xl", md: "3xl" }}
                        color="#D6B053"
                        onClick={onClickHome}
                        cursor="pointer"
                    >
                        Bakery & Park
                    </Heading>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="#D6B053">
                        ベーかりー あんど ぱーく
                    </Text>
                </Flex>
                <Flex display={{ base: "none", md: "flex" }} gap="10px">
                    <Box>
                        <Link
                            transition="transform 0.2s ease-out"
                            _hover={{
                                transform: "scale(1.1)",
                                color: "#D6B053",
                            }}
                            textDecoration="none"
                            onClick={onClickRegister}
                        >
                            会員登録
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            transition="transform 0.2s ease-out"
                            _hover={{
                                transform: "scale(1.1)",
                                color: "#D6B053",
                            }}
                            textDecoration="none"
                            onClick={onClickLogin}
                        >
                            ログイン
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            transition="transform 0.2s ease-out"
                            _hover={{
                                transform: "scale(1.1)",
                                color: "#D6B053",
                            }}
                            textDecoration="none"
                            onClick={onClickLike}
                        >
                            お気に入り一覧
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            transition="transform 0.2s ease-out"
                            _hover={{
                                transform: "scale(1.1)",
                                color: "#D6B053",
                            }}
                            textDecoration="none"
                            onClick={onClickSetting}
                        >
                            設定
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            transition="transform 0.2s ease-out"
                            _hover={{
                                transform: "scale(1.1)",
                                color: "#D6B053",
                            }}
                            textDecoration="none"
                            onClick={onClickLogout}
                        >
                            ログアウト
                        </Link>
                    </Box>
                </Flex>
                <Box display={{ base: "block", md: "none" }}>
                    <Menu size={32} color="#D6B053" onClick={onOpen} />
                </Box>
                <MenuDrawer
                    isOpen={isOpen}
                    onClose={onClose}
                    onClickRegister={onClickRegister}
                    onClickLogin={onClickLogin}
                    onClickLike={onClickLike}
                    onClickSetting={onClickSetting}
                    onClickLogout={onClickLogout}
                />
            </Flex>
        </>
    );
});
