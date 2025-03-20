import { memo, FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
    const { children, onClick } = props;

    return (
        <>
            <Button
                w="15%"
                bg="#B88822"
                _hover={{ opacity: 0.8 }}
                cursor="pointer"
                onClick={onClick}
            >
                {children}
            </Button>
        </>
    );
});
