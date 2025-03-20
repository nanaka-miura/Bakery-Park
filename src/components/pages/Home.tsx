import { FC, memo, useEffect, useState } from "react";
import { Box, Flex, Image, Stack, Text, Input, Button } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Search } from "lucide-react";
import { SearchInputButton } from "../molecules/SearchInputButton";

const images = [
    "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546237769-6f84ec1a512a?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1720070416636-0e5ef67d3862?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1567752588693-ad10a647c5a3?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Home: FC = memo(() => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const onClickButton = () => {
        alert("後ほど実装");
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 1000);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Box position="relative" w="100%" h="500px" overflow="hidden">
                <Image
                    src={images[index]}
                    alt="スライド画像"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    position="absolute"
                    top={0}
                    left={0}
                    transition="opacity 1s ease-in-out"
                    opacity={fade ? 1 : 0}
                    zIndex={-1}
                />
                <Image
                    src={images[index]}
                    alt="スライド画像"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    position="absolute"
                    top={0}
                    left={0}
                    transition="opacity 1s ease-in-out"
                    opacity={fade ? 1 : 0}
                    zIndex={0}
                />
            </Box>
            <Stack p={10} align="center">
                <Flex w="100%" gap="10px" justify="center">
                    <SearchInputButton onClickButton={onClickButton} />
                </Flex>
            </Stack>
        </div>
    );
});
