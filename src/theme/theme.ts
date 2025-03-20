import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
    globalCss: {
        "html, body": {
            backgroundColor: "orange.50",
            color: "orange.800",
        },
    },
});

export default theme;
