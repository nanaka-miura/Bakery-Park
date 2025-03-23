import { FC, memo } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {
    title: string;
    subTitle: string;
};

export const PageTitle: FC<Props> = memo((props) => {
    const { title, subTitle } = props;

    return (
        <Box maxWidth="900px" m="0 auto" p="0 20px">
            <Heading as="h1" textAlign="center" m="20px auto" marginBottom={0}>
                {title}
            </Heading>
            <Text textAlign="center" fontSize="xs" mt="5px" mb="15px">
                {subTitle}
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
    );
});
