import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
    globalCss: {
        "html, body": {
            backgroundColor: "#FAF7F0",
            color: "#675D48",
        },
    },
});

export default theme;
