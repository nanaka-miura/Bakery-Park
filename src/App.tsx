import { Button, ChakraProvider, defaultSystem } from "@chakra-ui/react";

import theme  from "./theme/theme";

function App() {
    return (
        <ChakraProvider value={theme}>
            <Button>ボタン</Button>
        </ChakraProvider>
    );
}

export default App;
