import { FC, memo } from "react";
import { Drawer, Button, CloseButton } from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickRegister: () => void;
    onClickLogin: () => void;
    onClickLike: () => void;
    onClickSetting: () => void;
    onClickLogout: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
    const {
        isOpen,
        onClose,
        onClickRegister,
        onClickLogin,
        onClickLike,
        onClickSetting,
        onClickLogout,
    } = props;

    return (
        <>
            <Drawer.Root placement="end" size="xs" open={isOpen}>
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <CloseButton
                                color="#D6B053"
                                onClick={onClose}
                                outline="none"
                                transition="transform 0.2s ease-out"
                                _hover={{
                                    transform: "scale(1.1)",
                                    color: "#D6B053",
                                }}
                                bg="none"
                            />
                        </Drawer.Header>
                        <Drawer.Body>
                            <Button
                                onClick={() => {
                                    onClickRegister();
                                    onClose();
                                }}
                                w="100%"
                                bg="none"
                                color="#D6B053"
                                transition="transform 0.2s ease-out"
                                _hover={{
                                    transform: "scale(1.1)",
                                    color: "#D6B053",
                                }}
                            >
                                会員登録
                            </Button>
                            <Button
                                onClick={() => {
                                    onClickLogin();
                                    onClose();
                                }}
                                w="100%"
                                bg="none"
                                color="#D6B053"
                                transition="transform 0.2s ease-out"
                                _hover={{
                                    transform: "scale(1.1)",
                                    color: "#D6B053",
                                }}
                            >
                                ログイン
                            </Button>
                            <Button
                                onClick={() => {
                                    onClickLike();
                                    onClose();
                                }}
                                w="100%"
                                bg="none"
                                color="#D6B053"
                                transition="transform 0.2s ease-out"
                                _hover={{
                                    transform: "scale(1.1)",
                                    color: "#D6B053",
                                }}
                            >
                                お気に入り一覧
                            </Button>
                            <Button
                                onClick={() => {
                                    onClickSetting();
                                    onClose();
                                }}
                                w="100%"
                                bg="none"
                                color="#D6B053"
                                transition="transform 0.2s ease-out"
                                _hover={{
                                    transform: "scale(1.1)",
                                    color: "#D6B053",
                                }}
                            >
                                設定
                            </Button>
                            <Button
                                onClick={() => {
                                    onClickLogout();
                                    onClose();
                                }}
                                w="100%"
                                bg="none"
                                color="#D6B053"
                                transition="transform 0.2s ease-out"
                                _hover={{
                                    transform: "scale(1.1)",
                                    color: "#D6B053",
                                }}
                            >
                                ログアウト
                            </Button>
                        </Drawer.Body>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Drawer.Root>
        </>
    );
});
